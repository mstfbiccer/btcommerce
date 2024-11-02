import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import BasketContext from "../store/basketContext";

const MainLayout = ({children}:any) => {
  const [basketCount, setBasketCount] = useState(0);
  const totalPrice = 100;

  return (
    <BasketContext.Provider value={{basketCount, setBasketCount, totalPrice}}>
       <div className="main-container">
        <Header/>
        {/* <NavBar/> */}
          {children}
        <Footer/>
    </div>
    </BasketContext.Provider>
  )
}

export default MainLayout;