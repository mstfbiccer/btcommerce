import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CommentForm from "../components/CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getProductById, getProductDataByIdList } from "../store/reducers/productOperations";

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

  // const {basketOperations, productOperations} = useSelector((state: RootState) => state);
  const {product: productData} = useSelector((state: RootState) => state.productOperations);
  const {products: basketProducts} = useSelector((state: RootState) => state.basketOperations);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductById(5));
  },[]);  
  

 const getSpesificProduct = async () => {
    const {data, status} = await axios.get(`https://fakestoreapi.com/products/${ahmet}`)
    if (status === 200) {
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