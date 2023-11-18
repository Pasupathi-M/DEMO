/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

// **************** Component
import {
  ContainerWrapper,
  PaperContainerV2,
  ContainerBoxV2,
  TextField_v1,
  Divider_v1,
  Button_v2,
  LoadingButton_v1,
} from "../../components/MUI/mui.index";

// ******************** Formik
import { useFormik } from "formik";


// ************** MUI
import { Grid, IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// *************** Router
import { useNavigate } from 'react-router-dom'

// ************* const
import { APP_ROUTES } from '../../data/AppRoutes'
import { signUpSchema } from '../../data/yup/signup.yup'
import { API_DATE_FORMAT } from '../../data/AppConst'

// ***************** Service
import AuthenticationService from '../../services/authentication/Authentication.service'
import { AxiosResponse } from "axios";

// ****************** utils
import { currentDate } from '../../utils/datetime'



export default function SignUp() {
    const navigate = useNavigate()
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)
  async function getSignIn(value: Record<string, unknown>, action: any){
    try{
      // console.log('values', value)
      const payload = {
        ...value,
        createddate: currentDate(API_DATE_FORMAT[5]),
        updateddate:currentDate(API_DATE_FORMAT[5])
      } 
      console.log('payload', payload)
      console.log(currentDate(API_DATE_FORMAT[5]))
      setLoading(false)
      const response: AxiosResponse = await AuthenticationService.signUp(payload)
      if(response?.status){
        console.log('data', response)
        navigate(APP_ROUTES?.SIGN_IN?.pathName)
      }
      setLoading(false)
    }catch(e){
      console.log('ERROR', e)
      setLoading(false)
    }
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      phoneno: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: signUpSchema,
    onSubmit: getSignIn,
  });
  return (
    <ContainerWrapper>
      <ContainerBoxV2
        styles={{
          width: "inherit",
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PaperContainerV2
          styles={{
            padding: "0%",
            display: "flex",
            height: "auto",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0,
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 15,
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "90%",
              padding: "15% 0% 5% 0%" 
              // height:'inherit'
            }}
          >
            <Grid container xs={12} rowGap={2}>
            <Grid item xs={12}>
                <TextField_v1
                  label="User name"
                  placeholder="enter email"
                  fullWidth
                  size="small"
                  type="text"
                  name="username"
                  value={formik?.values?.username}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  error={Boolean(formik?.errors?.username && formik?.touched?.username)}
                  helperText={ formik?.touched?.username && formik?.errors?.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Phone No"
                  placeholder="enter email"
                  fullWidth
                  size="small"
                  type="number"
                  name="phoneno"
                  value={formik?.values?.phoneno}
                  error={Boolean(formik?.errors?.phoneno && formik?.touched?.phoneno)}
                  helperText={formik?.touched?.phoneno && formik?.errors?.phoneno}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Email"
                  placeholder="enter email"
                  fullWidth
                  size="small"
                  type="email"
                  name="email"
                  value={formik?.values?.email}
                  error={Boolean( formik?.touched?.email && formik?.errors?.email)}
                  helperText={ formik?.touched?.email && formik?.errors?.email}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Password"
                  type={showPass ? "text" : "password"}
                  placeholder="enter password"
                  fullWidth
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                          setShowPass(!showPass);
                        }}
                        disableRipple
                      >
                        {showPass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                  name="password"
                  value={formik?.values?.password}
                  error={Boolean( formik?.touched?.password && formik?.errors?.password)}
                  helperText={ formik?.touched?.password && formik?.errors?.password}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Confirm Password"
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="enter password"
                  fullWidth
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                            setShowConfirmPass(!showConfirmPass);
                        }}
                        disableRipple
                      >
                        {showConfirmPass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                  name="confirmPassword"
                  value={formik?.values?.confirmPassword}
                  error={Boolean(formik?.touched?.confirmPassword && formik?.errors?.confirmPassword)}
                  helperText={ formik?.touched?.confirmPassword && formik?.errors?.confirmPassword}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <LoadingButton_v1 variant="contained" type="submit" loading={loading}>singup</LoadingButton_v1>
              </Grid>
              <Grid item xs={12}>
                <Divider_v1 style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <Typography>
                  {" "}
                  Do you have a account?&nbsp;{" "}
                  <Button_v2
                    disableRipple
                    size="small"
                    style={{ borderStyle: "none" }}
                    onClick={() => {navigate(APP_ROUTES?.SIGN_IN?.pathName)}}
                  >
                    Signin
                  </Button_v2>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </PaperContainerV2>
      </ContainerBoxV2>
    </ContainerWrapper>
  );
}
