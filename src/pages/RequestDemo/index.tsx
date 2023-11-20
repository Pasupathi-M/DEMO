/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";

// **************** Component
import {
  ContainerWrapper,
  ContainerBoxV2,
  LoadingButton_v1,
  TextField_v2,
  AutoComplete_V2,
  AutoComplete,
} from "../../components/MUI/mui.index";
import "./styles.css";

// ******************** Formik
import { useFormik } from "formik";

// ************** MUI
import {
  Autocomplete,
  Box,
  Grid,
  InputLabel,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  TextField,
  Theme,
  Typography,
  stepConnectorClasses,
  styled,
  useMediaQuery,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { toast } from "react-toastify";

// *************** Router
import { useNavigate } from "react-router-dom";

// ************* const
import { APP_ROUTES } from "../../data/AppRoutes";
import GridImg from "../../assets/png/Group.png";
import { IRequestDemo } from "../../types";

export default function RequestDemo() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [step, setStep] = useState(2);
  const [isOrgSubmitted, setIsOrgSubmitted] = useState(false);
  const [isCustomerSubmitted, setIsCustomerSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [organizationOption, setOrganizationOption] = useState<any>([]);
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  const [formData, setFormData] = useState<IRequestDemo>({
    organizationName: "",
    organizationType: "",
    contactPerson: "",
    contactNo: "",
    email: "",
    address: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<IRequestDemo>>({});

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const handleOrgSubmit = (e: any) => {
    e.preventDefault();
    const errors: Partial<IRequestDemo> = {};

    if (!formData.organizationName) {
      errors.organizationName = "Organization Name is required.";
    }
    if (!formData.organizationType) {
      errors.organizationType = "Organization Type is required.";
    }
    if (!formData.address) {
      errors.address = "Address is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsOrgSubmitted(true);
      setStep(2);
    }
  };

  const handleCustomerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
    const errors: Partial<IRequestDemo> = {};

    if (!formData.contactPerson) {
      errors.contactPerson = "Name is required.";
    }
    const isValidEmail = (email: string) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formData?.contactNo) {
      errors.contactNo = "Mobile Number is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    // try {
    //   const response = await RequestDemoService.createRequestDemo(formData);

    //   if (response?.status) {
    //     toast.success("Request submitted successfully!", {
    //       className: "toast-success",
    //     });
    //     setIsCustomerSubmitted(true);
    //     setStep(3);
    //   } else {
    //     toast.success("Request demo failed!", {
    //       className: "toast-error",
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error occurred while processing the request:", error);
    // }
  };

  console.log(formData);
  interface ApiResponse {
    id: string;
    name: string;
  }
  const getOrgType = async () => {
    // try {
    //   const response = await RequestDemoService.getIndustryType();
    //   if (!response) {
    //     throw new Error("No data received");
    //   }
    //   const responseData = response as unknown as ApiResponse[];
    //   const transformedOptions = responseData?.map((option: any) => ({
    //     label: option.name,
    //     value: option.id,
    //   }));
    //   setOrganizationOption(transformedOptions);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  useEffect(() => {
    getOrgType();
  }, []);

  return (
    <ContainerWrapper>
      <Grid container xs={12}>
        <Grid item xs={12} md={6} lg={6}>
          <ContainerBoxV2
            styles={{
              width: "inherit",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                style={{
                  textAlign: "center",
                  color: "#2C2B2B",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                pb={5}
              >
                SALES 10X
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                pb={5}
              >
                <img src={GridImg} alt="..." style={{ width: "70%" }} />
              </Box>
            </Box>
          </ContainerBoxV2>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ContainerBoxV2
            styles={{
              width: "inherit",
              height: "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
            p={2}
          >
            <Box
              sx={{
                backgroundColor: "#7145B0",
                height: "95vh",
                width: isMobile ? "100%" : "70%",
                borderRadius: 6,
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
                marginX={4}
                marginY={3}
              >
                <li className="custom-stepper">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: isOrgSubmitted ? "#7145B0" : "#9e8bd2",
                      border: "2px solid #fff",
                      borderRadius: 30,
                      cursor: "pointer",
                      width: isMobile ? 40 : 48,
                      height: isMobile ? 40 : 48,
                    }}
                    onClick={() => (isOrgSubmitted ? setStep(1) : null)}
                  >
                    <BusinessOutlinedIcon style={{ color: "white" }} />
                  </div>
                </li>
                <li className="custom-stepper">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: isCustomerSubmitted ? "#7145B0" : "#9e8bd2",
                      border: "2px solid #fff",
                      borderRadius: 30,
                      cursor: "pointer",
                      width: isMobile ? 40 : 48,
                      height: isMobile ? 40 : 48,
                    }}
                    onClick={() => (isCustomerSubmitted ? setStep(2) : null)}
                  >
                    <PersonOutlinedIcon style={{ color: "white" }} />
                  </div>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: isCustomerSubmitted ? "#7145B0" : "#9e8bd2",
                      border: "2px solid #fff",
                      borderRadius: 30,
                      cursor: "pointer",
                      width: isMobile ? 40 : 48,
                      height: isMobile ? 40 : 48,
                    }}
                    onClick={() => (isCustomerSubmitted ? setStep(3) : null)}
                  >
                    <TaskAltOutlinedIcon style={{ color: "white" }} />
                  </div>
                </li>
              </Box>
              {step === 1 && (
                <form style={{ paddingRight: "8%", paddingLeft: "8%" }}>
                  <Typography
                    style={{
                      color: "#ffff",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                    mb={1}
                  >
                    Organization Details
                  </Typography>
                  <Typography
                    style={{
                      color: "#ffff",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                    mb={3}
                  >
                    Please enter your organization details!
                  </Typography>
                  <Box pb={3}>
                    <InputLabel
                      shrink
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Organization Name{" "}
                      <span style={{ color: "red", fontSize: "20px" }}>*</span>
                    </InputLabel>
                    <TextField_v2
                      fullWidth
                      size="small"
                      placeholder="Enter your organization name"
                      sx={{ background: "#fff", borderRadius: 2 }}
                    />
                  </Box>
                  <Box pb={3}>
                    <InputLabel
                      shrink
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Organization Type{" "}
                      <span style={{ color: "red", fontSize: "20px" }}>*</span>
                    </InputLabel>

                    <AutoComplete_V2
                      placeholder="Select your organization type"
                      options={[]}
                      // value={formData.organizationType}
                      handleChange={(e: any) => {
                        // setFormData({
                        //   ...formData,
                        //   organizationType: e.value,
                        // });
                      }}
                    />
                  </Box>
                  <Box pb={6}>
                    <InputLabel
                      shrink
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Address{" "}
                      <span style={{ color: "red", fontSize: "20px" }}>*</span>
                    </InputLabel>
                    <TextField_v2
                      fullWidth
                      size="small"
                      placeholder="Enter your address"
                      sx={{ background: "#fff", borderRadius: 2 }}
                    />
                  </Box>

                  <LoadingButton_v1
                    fullWidth
                    style={{
                      background:
                        "linear-gradient(180deg, #9751FA 0%, #7B26F7 100%)",
                      boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.25)",
                      borderRadius: "7px",
                      border: "1px #A465FF solid",
                      color: "#ffff",
                      fontWeight: "600",
                    }}
                    onClick={() => navigate(APP_ROUTES?.OTP_VERIFY?.pathName)}
                  >
                    Next
                  </LoadingButton_v1>
                </form>
              )}
              {step === 2 && (
                <form style={{ paddingRight: "8%", paddingLeft: "8%" }}>
                  <Typography
                    style={{
                      color: "#ffff",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                    mb={1}
                  >
                    Contact Details
                  </Typography>
                  <Typography
                    style={{
                      color: "#ffff",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                    mb={3}
                  >
                    Please enter your contact details!
                  </Typography>
                  <Box pb={2}>
                    <InputLabel
                      shrink
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Name{" "}
                      <span style={{ color: "red", fontSize: "20px" }}>*</span>
                    </InputLabel>
                    <TextField_v2
                      fullWidth
                      size="small"
                      placeholder="Enter your name"
                      sx={{ background: "#fff", borderRadius: 2 }}
                    />
                  </Box>
                  <Box pb={2}>
                    <InputLabel
                      shrink
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Email{" "}
                      <span style={{ color: "red", fontSize: "20px" }}>*</span>
                    </InputLabel>

                    <TextField_v2
                      fullWidth
                      size="small"
                      placeholder="Enter your email"
                      sx={{ background: "#fff", borderRadius: 2 }}
                    />
                  </Box>
                  <Box pb={2}>
                    <InputLabel
                      shrink
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Mobile Number{" "}
                      <span style={{ color: "red", fontSize: "20px" }}>*</span>
                    </InputLabel>
                    <TextField_v2
                      fullWidth
                      size="small"
                      placeholder="Enter your address"
                      sx={{ background: "#fff", borderRadius: 2 }}
                    />
                  </Box>
                  <Box pb={4}>
                    <InputLabel
                      shrink
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Notes{" "}
                      <span style={{ color: "gray", fontWeight: "400" }}>
                        (Optional)
                      </span>
                    </InputLabel>
                    <TextField_v2
                      fullWidth
                      size="small"
                      placeholder="Enter your address"
                      sx={{ background: "#fff", borderRadius: 2 }}
                    />
                  </Box>

                  <LoadingButton_v1
                    fullWidth
                    style={{
                      background:
                        "linear-gradient(180deg, #9751FA 0%, #7B26F7 100%)",
                      boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.25)",
                      borderRadius: "7px",
                      border: "1px #A465FF solid",
                      color: "#ffff",
                      fontWeight: "600",
                    }}
                    onClick={() => navigate(APP_ROUTES?.OTP_VERIFY?.pathName)}
                  >
                    Submit
                  </LoadingButton_v1>
                </form>
              )}
              {step === 3 && isCustomerSubmitted && (
                <form style={{ paddingRight: "8%", paddingLeft: "8%" }}>
                  <Typography
                    style={{
                      color: "#ffff",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                    mb={1}
                  >
                    Request Submitted Successfully!
                  </Typography>
                  <Typography
                    style={{
                      color: "#ffff",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                    mb={3}
                  >
                    Please enter your organization details!
                  </Typography>
                  <div>
                    <Typography
                      style={{
                        color: "#ffff",
                        fontSize: "20px",
                        textAlign: "center",
                      }}
                    >
                      <label className="text-lg text-white-700 mt-2">
                        Thank you for requesting a demo! We have received your
                        information.
                      </label>
                      <label className="text-lg text-white-700">
                        Our team will get in touch with you shortly.
                      </label>
                    </Typography>
                  </div>

                  <LoadingButton_v1
                    fullWidth
                    style={{
                      background:
                        "linear-gradient(180deg, #9751FA 0%, #7B26F7 100%)",
                      boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.25)",
                      borderRadius: "7px",
                      border: "1px #A465FF solid",
                      color: "#ffff",
                      fontWeight: "600",
                    }}
                    onClick={() => navigate(APP_ROUTES?.SIGN_IN?.pathName)}
                  >
                    Back to Login
                  </LoadingButton_v1>
                </form>
              )}
            </Box>
          </ContainerBoxV2>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
