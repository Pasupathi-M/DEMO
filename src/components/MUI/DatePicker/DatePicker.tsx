import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";

interface IDatePickerProps extends DatePickerProps<unknown> {}

export const Datepicker: React.FC<IDatePickerProps> = (
  props: IDatePickerProps
) => {
  const defaultProps: IDatePickerProps = {
    label: "Date",
    InputLabelProps: {
      shrink: true
    }
  };
  const defaultStyleProps: IDatePickerProps = {
    sx: props?.sx ? props?.sx : {},
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          {...defaultProps}
          {...props}
          sx={{
            ...defaultStyleProps?.sx,
            ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
              height: "0.4375em",
              width: "100%",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
