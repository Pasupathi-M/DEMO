/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Autocomplete,
  TextField,
  AutocompleteProps,
  TextFieldProps,
  SxProps,
} from "@mui/material";
import { styled } from "@mui/system";
import { FC, ReactNode } from "react";
// ************* theme

import { theme } from "../../../theme/AppTheme";
import { Theme } from "@emotion/react";

const CustomAutocomplete = () => {
  const customStyles = (theme: any) => ({
    width: { sm: "50%", md: 340 },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
      backgroundColor: "#363636",
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='true']":
      {
        backgroundColor: theme.palette.secondary,
      },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected ='true'] .Mui-focused":
      {
        backgroundColor: "yellow",
      },
  });
};

interface CustomAutocompleteProps
  extends AutocompleteProps<Record<string, any> | string, true, true, true> {}

export const AutoComplete: FC<CustomAutocompleteProps> = (
  props: CustomAutocompleteProps
) => <Autocomplete {...props} />;
// const StyledAutotext = styled(TextField)(() => ({}));

// export const AutoTextField = ({ children, ...rest }: TextFieldProps) => (
//   <TextField {...rest}>{children}</TextField>
// );
