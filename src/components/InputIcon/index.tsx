import { ReactNode } from "react";
import Input, { InputProps } from "../Input";
import Styles from "./InputIcon.module.css";
// Use Open Close principle
type InputIconProps = {
  children: ReactNode;
} & InputProps;

const InputIcon = ({ children, ...rest }: InputIconProps) => {
  return (
    <div className={Styles.inputContainer}>
      <Input {...rest} />

      <div className={Styles.iconContainer}>{children}</div>
    </div>
  );
};

export default InputIcon;
