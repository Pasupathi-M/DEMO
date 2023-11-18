/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

// ******************* components
import { ContainerWrapper } from "../components/MUI/mui.index";

// **************** MUI
import { Grid } from "@mui/material";

// ************* Layout component
import AppTopBar from "./AppTopBar/AppTopBar";
import AppSideBar from "./AppSideBar/AppSideBar";
import AppContainer from "./AppContainer/AppContainer";
import { PaperContainer } from "../components/MUI/mui.index";

// For overflow style
const GRIDSX = {
  height: "inherit",
  width: "100%",
  display: "flex",
  alignContent: "stretch",
  overflow: "scroll",
};

export default function AppLayout() {
  const [wh, seWH] = useState({
    height: `${window.innerHeight}px`,
    width: `${window.innerWidth}px`,
  });
  useEffect(() => {
    console.log(wh)
    seWH({
      height: `${window.innerHeight}px`,
      width: `${window.innerWidth}px`,
    });
  }, [window.innerHeight, window.innerWidth]);
  return (
    <>
      <ContainerWrapper>
        <PaperContainer>
          <Grid container xs={12} spacing={1} sx={{ height: "100%", justifyContent: 'center' }}>
            <Grid container item xs={12}>
              {/* ************************ | Top Bar| */}
              <AppTopBar />
            </Grid>
            <Grid xs={12} container item sx={{ height: "100%" }}>
              <Grid container item xs={2}  xl={1} sx={GRIDSX}>
                {/* ************************* | SideBar| **********  */}

                <AppSideBar />
              </Grid>
              <Grid container item xs={10} xl={11} sx={GRIDSX}>
                {/* ************************* | Container | **********  */}
                <AppContainer />
              </Grid>
            </Grid>
          </Grid>
        </PaperContainer>
      </ContainerWrapper>
    </>
  );
}
