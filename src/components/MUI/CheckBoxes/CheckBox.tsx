
import { Checkbox, CheckboxProps } from "@mui/material";

interface ICheckBoxProps extends CheckboxProps {}

export const CheckBox: FC<ICheckBoxProps> = (props: ICheckBoxProps) => {
  return <Checkbox {...props} />;
};
