import Banner from "../components/Banner";
import ProductWidget from "../components/ProductWidget";
import TopBar from "../components/TopBar";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <TopBar/>
      <Banner/>
      <ProductWidget/>
      <Banner/>
      <Banner/>
      <Banner/>
    </MainLayout>
  )
}

export default Home;