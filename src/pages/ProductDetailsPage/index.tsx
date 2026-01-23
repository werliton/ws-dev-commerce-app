import Styles from "./ProductDetailsPage.module.css";
import Typography from "../../components/Typography";
import ProductDetail from "../../components/ProductDetail";
import { Product } from "../../common/types/product";
import StatusHandler from "../../common/utils/statusHandler";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import httpClient from "../../common/lib/httpClient";
import { ProductService } from "../../common/services/productService";
import { useFetchProduct } from "../../common/hooks/useFetchProduct";

type ProductDetailsPageProps = {
  addToCart: (product: Product) => void;
};

const productService = ProductService(httpClient);

function ProductDetailsPage({ addToCart }: ProductDetailsPageProps) {
  const {
    product,
    loading: isLoading,
    error,
  } = useFetchProduct(productService);

  return (
    <>
      <BackgroundBanner backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-secoes.png" />
      <main className="container">
        <section>
          <div className={Styles.productContainer}>
            <Typography variant="h4">Detalhes do Produto</Typography>

            <StatusHandler isLoading={isLoading} error={error}>
              {product ? (
                <ProductDetail
                  id={product.id}
                  title={product.label}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageSrc}
                  colors={product.colors}
                  addToCart={addToCart}
                />
              ) : (
                <p>Produto não encontrado.</p>
              )}
            </StatusHandler>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetailsPage;
