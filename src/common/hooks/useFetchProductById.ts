import { useEffect, useState } from "react";
import { IProductService } from "../interfaces/productService.interface";
import { Product } from "../types/product";
import { useParams } from "react-router-dom";

const useFetchProductById = (productService: IProductService) => {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        if (!id) {
          setError("ID do produto não fornecido");
          setIsLoading(false);
          return;
        }
        const productData = await productService.getProductById(id);
        setProduct(productData);
        setIsLoading(false);
      } catch {
        setError("Erro ao carregar produtos");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [id, productService]);

  return { product, isLoading, error };
};

export default useFetchProductById;
