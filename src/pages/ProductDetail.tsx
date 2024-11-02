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

const ProductDetail = () => {
  const {ahmet} = useParams();
  const [product, setProduct] = useState<ProductCardProps>();
 const getSpesificProduct = async () => {
    const {data, status} = await axios.get(`https://fakestoreapi.com/products/${ahmet}`)
    if (status === 200) {
      setProduct(data);
    }
  }
  useEffect(() => {
    getSpesificProduct();
  }, []);

  useEffect(() => {
    if (product) {
      getSpesificProduct();
    }
    // ahmet -> burada product id'yi temsil ediyor
    // path değiştiğinde product id de değiştiği için
    // useEffect içerisinde product id'ye göre product bilgilerini
    // getiriyoruz

  }, [ahmet]);

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