import { ReactNode } from "react";
import Styles from "./CartActions.module.css";

export type CartActionsProps = {
  children: ReactNode;
};

const CartActions = ({ children }: CartActionsProps) => (
  <div className={Styles.cartActions}>{children}</div>
);

export default CartActions;
