/* eslint-disable no-empty-pattern */
import { Button, ButtonProps ,Radio, RadioProps, Switch, SwitchProps } from "@mui/material";
import { styled } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { FC } from "react";

// eslint-disable-next-line no-empty-pattern
export const Button_v1 = styled(Button)(({}) => ({
  width: "100%",
  borderRadius: 0,
  borderStyle: "dashed",
}));

// eslint-disable-next-line no-empty-pattern
export const Button_v2 = styled(Button)(({}) => ({
  borderStyle: "none",
  height: "auto",
}));

export const Button_v3 = (props: any) => {

    return <Button variant="contained" {...props} />
}


export const LoadingButton_v1 = styled(LoadingButton)(({}) => ({
  borderStyle: "none",
  borderRadius: "0",
  width: "100%",
}));

interface IRadioProps extends RadioProps {}
export const RadioButton: FC<IRadioProps> = (props: IRadioProps) => {
  const defaultProps: IRadioProps = {
    size: "small",
  };

  return <Radio {...defaultProps} {...props} />;
};
// const defaultProps = {
//     size:
// }

interface IToggleSwitchProps extends SwitchProps {}

export const ToggleSwitch: FC<IToggleSwitchProps> = (
  props: IToggleSwitchProps
) => {
  const defaultProps: IToggleSwitchProps = {
    size: "small",
  };

  return <Switch {...defaultProps} {...props} />;
};

interface IButtonV1Props extends ButtonProps {}
export const ButtonV1: FC<IButtonV1Props> = ({
  children,
  ...rest
}: IButtonV1Props) => {
  const defaultProps: IButtonV1Props = {
    variant: 'contained',
    size: 'small'

  }
  return (
    <Button {...defaultProps} {...rest} >
      {children}
    </Button>
  );
};