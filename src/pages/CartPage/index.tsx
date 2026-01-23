import Typography from "../../components/Typography";
import Styles from "./CartPage.module.css";

import { Product } from "../../common/types/product";
import CartSummary from "../../components/CartSummary";
import CartList from "../../components/CartList";
import { useNavigate } from "react-router-dom";
import EmptyMessage from "../../components/EmptyMessage";

type CartPageProps = {
  cartItems: Product[];
  cartCount: number;
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartItems, removeFromCart, cartCount }: CartPageProps) => {
  const navigate = useNavigate();
  const handleRedirect = () => navigate("/");
  const handlePayment = () => console.log("pagamento");

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
          {cartItems?.length > 0 && (
            <CartList cartItems={cartItems} removeFromCart={removeFromCart} />
          )}
          {cartItems?.length == 0 && (
            <EmptyMessage>Não existem produtos no carrinho.</EmptyMessage>
          )}
        </div>
        <CartSummary
          cartItemsCount={cartCount}
          total={cartItems.reduce((acc, item) => acc + item.price, 0)}
          freight={cartItems.length > 0 ? 8 : 0}
          handleRedirect={handleRedirect}
          onPayment={handlePayment}
        />
      </section>
    </main>
  );
};

export default CartPage;
