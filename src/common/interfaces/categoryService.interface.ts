import { Category } from "../types/category";

export interface ICategoryService {
  getAllCategories(): Promise<Category[]>;
}
