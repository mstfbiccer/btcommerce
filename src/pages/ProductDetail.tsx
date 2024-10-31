import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CommentForm from "../components/CommentForm";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}
interface Rating {
  rate: number;
  count: number;
}

const ProductDetail = ({basketCount, setBasketCount}:any) => {
  const {ahmet} = useParams();
  const [product, setProduct] = useState<ProductCardProps>();
  console.log(ahmet);
  const getSpesificProduct = async () => {
    const {data, status} = await axios.get(`https://fakestoreapi.com/products/${ahmet}`)
    if (status === 200) {
      console.log(data);
      setProduct(data);
    }
  }
  useEffect(() => {
    getSpesificProduct();
  }, []);

  return (
     <div>
     <MainLayout>
      {product && (
          <ProductCard {...product} />
      )}
      <CommentForm />
     </MainLayout>
    </div>
  );
}

export default ProductDetail;