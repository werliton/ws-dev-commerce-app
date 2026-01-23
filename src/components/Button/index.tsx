import { ButtonHTMLAttributes, ReactNode } from "react";
import classnames from "classnames"; // Para combinar classes dinamicamente
import Styles from "./Button.module.css";

// Aplicando o Principio: L (SOLID) Liskov Substitution: Um componente filho precisa suportar ou ter a capacidade de fornecer qualquer atributo do
// componente pai, sem alterar o componente pai

export type ButtonProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Define diferentes tamanhos
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button className={classnames(Styles[variant], Styles[size])} {...props}>
      {children}
    </button>
  );
};

export default Button;
