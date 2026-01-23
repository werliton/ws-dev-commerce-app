import { useEffect, useState } from "react";
import { ICategoryService } from "../interfaces/categoryService.interface";
import { Category } from "../types/category";

export const useFetchCategory = (categoryService: ICategoryService) => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);

        const categoriesData = await categoryService.getAllCategories();
        setCategories(categoriesData);
        setIsLoading(false);
      } catch {
        setError("Erro ao carregar categorias");
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [categoryService]);

  return { categories, isLoading, error };
};
