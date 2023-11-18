import "./styles/App.scss";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Component
import AppLayout from "./app-layout/AppLayout";
import PageComponents from "./components/MUI/AppContent/PageComponents/PageComponents";

// ******************* Util
import { RANDOM_UNIQUE } from "./utils/getUnique";

// ************************* Pages
const SignIn = lazy(() => import("./pages/Authorizations/SignIn"));
const SignUp = lazy(() => import("./pages/Authorizations/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const OtpVerify = lazy(() => import("./pages/OTPVerify"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

// ******************* App Data
import { APP_ROUTES } from "./data/AppRoutes";

function App() {
  console.log("PageComponents", PageComponents());
  return (
    <Routes>
      <Route
        path={APP_ROUTES?.SIGN_IN?.pathName}
        element={
          <Suspense>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTES?.SIGN_UP?.pathName}
        element={
          <Suspense>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTES?.FORGOT_PASSWORD?.pathName}
        element={
          <Suspense>
            <ForgotPassword />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTES?.OTP_VERIFY?.pathName}
        element={
          <Suspense>
            <OtpVerify />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTES?.RESET_PASSWORD?.pathName}
        element={
          <Suspense>
            <ResetPassword />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTES?.LANDING?.pathName}
        element={<AppLayout />}
        key={RANDOM_UNIQUE()}
      >
        {/* {...TestArray} */}
        {...PageComponents()}
      </Route>
    </Routes>
  );
}

export default App;
