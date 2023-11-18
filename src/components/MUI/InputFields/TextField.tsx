/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/system";
// ************* Types
import { TNestedObj } from "../../../types/global.types.ts";
import { FC } from "react";

export const TextField_v1 = styled(TextField)(({}: TNestedObj) => ({
  borderRadius: 0,
  width: "100%",
}));

// interface ITextFieldProps extends TextFieldProps {}
export const Textfield: FC<TextFieldProps> = (props: TextFieldProps) => {
  const defaultProps: TextFieldProps = {
    size: "small",
  };
  return (
    <TextField
      {...defaultProps}
      {...props}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
