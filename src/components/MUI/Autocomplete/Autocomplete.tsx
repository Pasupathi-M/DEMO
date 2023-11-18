/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Autocomplete,
  TextField,
  AutocompleteProps,
  TextFieldProps,
  SxProps,
  AutocompleteRenderInputParams,
} from "@mui/material";

// ************* theme

import { theme } from "../../../theme/AppTheme";
import { Theme } from "@emotion/react";

import { Textfield } from "../mui.index";

interface CustomAutocompleteProps
  extends AutocompleteProps<Record<string, any> | string, true, true, true> {}

export const AutoComplete: FC<CustomAutocompleteProps> = (
  props: CustomAutocompleteProps
) => {
  const defaultProps: CustomAutocompleteProps = {
    size: "small",
    renderInput: (params) => {
      return <Textfield {...params} />;
    },
    options: [],
  };
  return <Autocomplete {...defaultProps} {...props} />;
};
