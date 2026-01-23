import { Product } from "../../common/types/product";
import CartItem from "../CartItem";

type CartListProps = {
  cartItems: Product[];
  removeFromCart(id: number): void;
};

const CartList = ({ cartItems, removeFromCart }: CartListProps) => {
  return (
    <>
      {cartItems.map((item) => (
        <CartItem item={item} removeFromCart={removeFromCart} key={item.id} />
      ))}
    </>
  );
};

export default CartList;
