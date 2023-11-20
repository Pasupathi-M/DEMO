/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

// **************** Component
import {
  ContainerWrapper,
  ContainerBoxV2,
  LoadingButton_v1,
  TextField_v2,
} from "../../components/MUI/mui.index";

// ******************** Formik
import { useFormik } from "formik";

// ************** MUI
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// *************** Router
import { useNavigate } from "react-router-dom";

// ************* const
import { APP_ROUTES } from "../../data/AppRoutes";
import { signinSchema } from "../../data/yup/signin.yup";

// ***************** Service
import AuthenticationService from "../../services/authentication/Authentication.service";
import { AxiosResponse } from "axios";
import LocalStorageService from "../../libs/localStorage.service";

import GridImg from "../../assets/png/Group.png";

export default function SignIn() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const getSignIn = async (
    values: Record<string, any>,
    _action: Record<string, "Function">
  ) => {
    console.log("values", values);
    setLoading(true);
    const resData: AxiosResponse = await AuthenticationService.signIn(values);
    console.log("Sign in response", resData);
    if (resData?.status) {
      LocalStorageService.setItem(
        "user",
        JSON.stringify({
          username: resData?.data?.response?.username,
          email: resData?.data?.response?.email,
        })
      );
      LocalStorageService.setItem(
        "access-token",
        resData?.data?.response?.token
      );
      navigate(APP_ROUTES?.LANDING?.pathName);
    }
    setLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit: (value: Record<string, any>, act: any) => getSignIn(value, act),
  });
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
                pb={4}
              >
                SALES 10X
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                pb={2}
              >
                <img src={GridImg} alt="..." style={{ width: "70%" }} />
              </Box>
              <Typography
                style={{
                  textAlign: "center",
                  color: "#6e6d6d",
                  fontWeight: "600",
                }}
              >
                Experience our incredible features by requesting a demo
                instantly!{" "}
                <span
                  style={{
                    color: "#7145B0",
                    cursor: "pointer",
                    paddingLeft: "10px",
                  }}
                  onClick={() => navigate(APP_ROUTES?.REQUEST_DEMO?.pathName)}
                >
                  Request demo
                </span>
              </Typography>
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
              <form
                onSubmit={formik.handleSubmit}
                style={{ padding: "8%", marginTop: "40px" }}
              >
                <Typography
                  style={{
                    color: "#ffff",
                    fontSize: "30px",
                    fontWeight: "600",
                  }}
                  mb={2}
                >
                  Login
                </Typography>
                <Typography
                  style={{
                    color: "#ffff",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                  mb={4}
                >
                  Welcome Onboard With Us!
                </Typography>
                <Box pb={3}>
                  <InputLabel
                    shrink
                    sx={{ fontSize: "18px", fontWeight: "600", color: "#ffff" }}
                  >
                    Username
                  </InputLabel>
                  <TextField_v2
                    fullWidth
                    size="small"
                    placeholder="Enter your username"
                    sx={{ background: "#fff", borderRadius: 2 }}
                  />
                </Box>
                <Box>
                  <InputLabel
                    shrink
                    sx={{ fontSize: "18px", fontWeight: "600", color: "#ffff" }}
                  >
                    Password
                  </InputLabel>
                  <TextField_v2
                    fullWidth
                    size="small"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <VisibilityOff fontSize="small" />
                          ) : (
                            <Visibility fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{ background: "#fff", borderRadius: 2 }}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "end" }}
                  pt={1}
                  pb={5}
                >
                  <Typography
                    style={{ color: "#ffff", cursor: "pointer" }}
                    onClick={() => {
                      navigate(APP_ROUTES?.FORGOT_PASSWORD?.pathName);
                    }}
                  >
                    Forgot Password?
                  </Typography>
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
                >
                  Login
                </LoadingButton_v1>
              </form>
            </Box>
          </ContainerBoxV2>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
