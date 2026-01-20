import { ShoppingBagIcon } from "../../common/icons/ShoppingBagIcon";
import { Product } from "../../common/types/product";
import Divider from "../Divider";
import Field from "../Field";
import Typography from "../Typography";
import Styles from "./CartSummary.module.css";
import CartActions from "../CartActions";
import Button from "../Button";

type CartSummaryProps = {
  cartItems: Product[];
  handleRedirect(e: React.MouseEvent<HTMLElement>): void;
  onPayment(e: React.MouseEvent<HTMLElement>): void;
};

const CartSummary = ({
  cartItems,
  handleRedirect,
  onPayment,
}: CartSummaryProps) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = cartItems.length > 0 ? 8 : 0;

  return (
    <div className={Styles.cartSummary}>
      <Typography variantStyle="heading-small">Sumário</Typography>
      <div className={Styles.discount}>
        <Field
          label="Cupom de desconto"
          inputId="cupom"
          inputPlaceholder="Digite o cupom"
          buttonText="Ok"
          onButtonClick={() => {}}
          onChange={() => {}}
        />
      </div>
      <div className={Styles.summaryResume}>
        <Typography variantStyle="body-small-bold">
          {cartItems.length} Produtos
        </Typography>
        <Typography variantStyle="body-small-bold">R$ {total}</Typography>
        <Typography variantStyle="body-small-bold">Frete:</Typography>
        <Typography variantStyle="body-small-bold">R$ {freight}</Typography>
      </div>
      <Divider style={{ borderColor: "#780BF7" }} />
      <div className={Styles.total}>
        <Typography variantStyle="body-large-bold">
          <ShoppingBagIcon />
          <span style={{ marginLeft: "4px" }}>Total:</span>
        </Typography>
        <Typography variantStyle="body-large-bold" className={Styles.total}>
          R$ {total + freight}
        </Typography>
      </div>
      <CartActions>
        <Button onClick={handleRedirect} variant="secondary">
          Continuar comprando
        </Button>
        <Button onClick={onPayment}>Ir para pagamento</Button>
      </CartActions>
    </div>
  );
};

export default CartSummary;
