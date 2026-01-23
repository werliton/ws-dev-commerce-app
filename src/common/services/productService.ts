import { PRODUCTS_BASE_URL } from "../constants/endpoints";
import { IHttpClient } from "../interfaces/http.interface";
import { IProductService } from "../interfaces/IProductService";
import { Product } from "../types/product";

export const ProductService = (httpClient: IHttpClient): IProductService => {
  return {
    async getAllProducts() {
      try {
        const response = await httpClient.get<{ products: Product[] }>(
          PRODUCTS_BASE_URL,
        );
        return response.products;
      } catch (error) {
        throw new Error("Erro ao buscar produtos:" + error);
      }
    },
    async getProductById(id: string) {
      try {
        const products = await this.getAllProducts();
        return products.find((product) => product.id.toString() === id) || null;
      } catch (error) {
        throw new Error("Erro ao buscar produto por ID:" + error);
      }
    },
  };
};
