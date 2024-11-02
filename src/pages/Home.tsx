import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import TopBar from "../components/TopBar";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { getCategories, getSpecificCategory } from "../store/reducers/productOperations";
import CategoryWidget from "../components/CategoryWidget";


const Home = () => {
  const dispatch = useDispatch();
  const {data:categories} = useSelector((state: any) => state.productOperations.categories);
  const {data:activeProducts}= useSelector((state: any) => state.productOperations.activeCategoryProducts);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  // eğer redux kullanmasaydık, aşağıdaki gibi bir async fonksiyon oluşturup
  // useEffect içinde çağırabilirdik.
  // const getCategoryData = async () => {
  //   const data =  await services.getCategories();
  //   console.log("data", data);
  // }
  // console.log("categories",categories);
  // console.log("activeProducts",activeProducts);
  
  useEffect(() => {
    if(categories && categories.length > 0){
      dispatch(getSpecificCategory(categories[0]));
    }
  }, [categories]);
  return (
    <MainLayout>
      <TopBar/>
      <Banner/> 
      {/* {useMemo(() =>  <ProductWidget products={products} limit={limit} isSlider={isSlider} />, [])} */}
      {/* {products && products.length > 0 &&  (
        <ProductWidget products={products} limit={limit} isSlider={isSlider} />
      )} */}
      <CategoryWidget categories={categories} activeProducts={activeProducts} loading={activeProducts.loading} />
      <Banner/>
      <Banner/>
      <Banner/>
    </MainLayout>
  )
}

export default Home;