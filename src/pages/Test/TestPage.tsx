/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useEffect, useState } from "react";

// **************** Slice
import { TestAPIGelAll } from "../../redux/features/test/test";

// ****** MUI
import {
  TextField,
  Autocomplete,
  AutocompleteRenderInputParams,
  TextFieldProps,
  Grid,
} from "@mui/material";

// ************** Redux Hooks
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux.hooks";

// Components
import {
  Textfield,
  AutoComplete,
  AutoTextField,
  Datepicker,
  CheckBox
} from "../../components/MUI/mui.index";

export default function TestPageOne() {
  const dispatch = useAppDispatch();

  const [displayData, setDisplayData] = useState<any>([]);

  useEffect(() => {
    // dispatch(TestAPIGelAll({}))
    // const data = useAppSelector((state: any) => state?.testApi?.data)
    setDisplayData([]);
  }, []);
  return (
    <>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12}>
          <TextField label="test" />
        </Grid>
        <Grid item xs={12}>
          <Textfield label="hello" size="small" variant="" />
        </Grid>
        <Grid item xs={12}>
          <AutoComplete
            options={[
              {
                label: "test",
                value: "Test",
              },
              {
                label: "test",
                value: "Test",
              },
              {
                label: "test",
                value: "Test",
              },
              {
                label: "test",
                value: "Test",
              },
            ]}
            renderInput={(params) => <TextField {...params} />}
            // defaultValue={{label:"test", value: 'test'}}
          />
        </Grid>
        <Grid item xs={12}>
          <Datepicker onChange={(value) => console.log('value', value)}/>
        </Grid>
        <Grid item xs={12}>
          <CheckBox />
        </Grid>
      </Grid>
    </>
  );
}
