import Button from "../../components/Button";
import Categories from "../../components/Categories";
import HeroBanner from "../../components/HeroBanner";
import Newsletter from "../../components/Newsletter";
import ProductList from "../../components/ProductList";
import Typography from "../../components/Typography";
import StatusHandler from "../../common/utils/statusHandler";
import { ProductService } from "../../common/services/productService";
import httpClient from "../../common/lib/httpClient";
import useFetchProducts from "../../common/hooks/useFetchProducts";
import { CategoryService } from "../../common/services/categoryService";
import { useFetchCategory } from "../../common/hooks/useFetchCategory";

const productService = ProductService(httpClient);
const categoryService = CategoryService(httpClient);

function HomePage() {
  const handleSubscribe = (email: string) => {
    console.log(`Usuário inscrito com o email: ${email}`);
  };

  // Fetch de categorias
  const {
    categories,
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useFetchCategory(categoryService);

  // Fetch de produtos
  const {
    products,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useFetchProducts(productService);

  return (
    <>
      <HeroBanner
        backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-seceos-tablet.png"
        mainImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/8df6d50256e4b270eb794ccbc0314baf2a656211/hero.png"
      >
        <Typography variant="h1">
          Hora de abraçar seu{" "}
          <span style={{ color: "#8fff24" }}>lado geek!</span>
        </Typography>
        <Button onClick={() => console.log("ver novidades")} size="large">
          Ver as novidades!
        </Button>
      </HeroBanner>
      <main className="container">
        <StatusHandler isLoading={isLoadingCategories} error={categoriesError}>
          <Categories categories={categories || []} />
        </StatusHandler>

        <StatusHandler isLoading={isLoadingProducts} error={productsError}>
          <ProductList title="Promoções especiais" products={products || []} />
        </StatusHandler>
      </main>
      <Newsletter onSubscribe={handleSubscribe} />
    </>
  );
}

export default HomePage;
