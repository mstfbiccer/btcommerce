import axios from "axios";
import Banner from "../components/Banner";
import ProductWidget from "../components/ProductWidget";
import TopBar from "../components/TopBar";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useMemo, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isSlider, setIsSlider] = useState(true);
  const getProducts = async () => {
    const {data, status} = await axios.get('https://fakestoreapi.com/products')
    if (status === 200) {
      if(data.length > 10) {
        setLimit(data.length);
      }
      setProducts(data);

    }
  }
  useEffect(() => {
    getProducts();
  }
  , []);
  return (
    <MainLayout>
      <TopBar/>
      <Banner/> 
      {/* {useMemo(() =>  <ProductWidget products={products} limit={limit} isSlider={isSlider} />, [])} */}

      {products && products.length > 0 &&  (
        <ProductWidget products={products} limit={limit} isSlider={isSlider} />
      )}
      <Banner/>
      <Banner/>
      <Banner/>
    </MainLayout>
  )
}

export default Home;