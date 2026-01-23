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

    async getProductById(id: string) {
      try {
        const response = await http.get<{ products: Product[] }>(
          PRODUCTS_BASE_URL,
        );
        const foundProduct = response.products.find(
          (product) => product.id.toString() === id,
        );
        return foundProduct || null;
      } catch {
        throw new Error("Erro ao buscar produto por ID");
      }
    },
  };
};
