import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { IHttpClient } from "../../interfaces/http.interface";
import { IProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

export const ProductService = (http: IHttpClient): IProductService => {
  return {
    async getAllProducts() {
      try {
        const response = await http.get<{ products: Product[] }>(
          PRODUCTS_BASE_URL,
        );
        return response.products;
      } catch {
        throw new Error("Erro ao buscar produtos");
      }
    },
  };
};
