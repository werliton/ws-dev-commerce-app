import Typography from "../../components/Typography";
import Styles from "./CartPage.module.css";

import { Product } from "../../common/types/product";
import CartItem from "../../components/CartItem";
import EmptyMessage from "../../components/EmptyMessage";
import CartSummary from "../../components/CartSummary";

type CartPageProps = {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartItems, removeFromCart }: CartPageProps) => {
  return (
    <main className="container">
      <div className={Styles.cartTitle}>
        <Typography variant="h4">Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <div className={Styles.cartItems}>
          <Typography
            variantStyle="body-large-bold"
            className={Styles.cartItemTitle}
          >
            Detalhes da compra
          </Typography>
          {cartItems?.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                item={item}
                removeFromCart={removeFromCart}
                key={item.id}
              />
            ))
          ) : (
            <EmptyMessage>Não existem produtos no carrinho.</EmptyMessage>
          )}
        </div>
        <CartSummary cartItems={cartItems} />
      </section>
    </main>
  );
};

export default CartPage;
