import { useParams } from "react-router-dom";
import { IProductService } from "../interfaces/IProductService";
import { useEffect, useState } from "react";
import { Product } from "../types/product";

export const useFetchProduct = (productService: IProductService) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (!id) {
          setError("Product ID is required");
          setLoading(false);
          return;
        }
        const _product = await productService.getProductById(id);
        setProduct(_product);
        setLoading(false);
      } catch (error) {
        setError("Error fetching product:" + error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productService, id]);

  return { product, loading, error };
};
