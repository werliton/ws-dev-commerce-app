import { CATEGORIES_BASE_URL } from "../../constants/endpoints";
import { ICategoryService } from "../../interfaces/categoryService.interface";
import { IHttpClient } from "../../interfaces/http.interface";

export const CategoryService = (httpClient: IHttpClient): ICategoryService => {
  return {
    async getAllCategories(): Promise<string[]> {
      try {
        const response = await httpClient.get<{ categories: string[] }>(
          CATEGORIES_BASE_URL,
        );
        return response.categories;
      } catch {
        throw new Error("Erro ao buscar categorias");
      }
    },
  };
};
