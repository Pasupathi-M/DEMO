/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Autocomplete,
  AutocompleteProps,
  TextFieldProps,
  SxProps,
  AutocompleteRenderInputParams,
} from "@mui/material";
import Select, { StylesConfig } from "react-select";

// ************* theme

import { theme } from "../../../theme/AppTheme";
import { Theme } from "@emotion/react";

import { Textfield } from "../mui.index";

interface CustomAutocompleteProps
  extends AutocompleteProps<Record<string, any> | string, true, true, true> {}

const customStyles: StylesConfig = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? "green" : "green",
    ":hover": {
      borderColor: state.isFocused ? "green" : "green",
    },
  }),
};

export const AutoComplete: React.FC<CustomAutocompleteProps> = (
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

export const AutoComplete_V2: any = (props: any) => {
  const {
    options,
    isMulti,
    isClearable,
    isSearchable,
    placeholder,
    selectedOptions,
    handleChange,
  } = props;

  return (
    <Select
      value={selectedOptions}
      onChange={handleChange}
      isClearable={isClearable}
      isSearchable={isSearchable}
      classNamePrefix="dropdown"
      options={options}
      isMulti={isMulti}
      placeholder={placeholder}
      styles={customStyles}
    />
  );
};
