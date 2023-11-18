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
  LoadingButton_v1
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
import { signinSchema }  from '../../data/yup/signin.yup'

// ***************** Service
import AuthenticationService from '../../services/authentication/Authentication.service'
import { AxiosResponse } from "axios";
import LocalStorageService from '../../libs/localStorage.service'

export default function SignIn() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)

  const getSignIn = async (values: Record<string, any>, _action: Record<string, 'Function'> ) => {
    console.log('values', values)
    setLoading(true)
   const resData: AxiosResponse =  await AuthenticationService.signIn(values)
   console.log('Sign in response', resData)
   if(resData?.status){
    LocalStorageService.setItem('user', JSON.stringify({
      username: resData?.data?.response?.username,
      email: resData?.data?.response?.email
    }))
    LocalStorageService.setItem('access-token', resData?.data?.response?.token)
    navigate(APP_ROUTES?.LANDING?.pathName)
   }
   setLoading(false)
  //  action?
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit:(value: Record<string, any>, act: any) => getSignIn(value, act) ,
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
            height: "65%",
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
            }}
          >
            <Grid container xs={12} rowGap={2}>
              <Grid item xs={12}>
                <TextField_v1
                  label="Email"
                  placeholder="enter email"
                  fullWidth
                  size="small"
                  name="email"
                  error={Boolean(formik?.errors?.email )}
                  helperText={ formik?.errors?.email}
                  value={formik?.values?.email}
                  onChange={formik.handleChange}
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
                  error={Boolean(formik?.errors?.password && formik?.touched?.password)}
                  helperText={ formik?.touched?.password && formik?.errors?.password}
                  onChange={formik.handleChange}
                  onBlur={formik?.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <LoadingButton_v1 variant="contained" type="submit" loading={loading}>singin</LoadingButton_v1>
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
                  Don't have an account?&nbsp;{" "}
                  <Button_v2
                    disableRipple
                    size="small"
                    style={{ borderStyle: "none" }}
                    onClick={() => { navigate(APP_ROUTES?.SIGN_UP?.pathName)}}
                  >
                    Signup
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
