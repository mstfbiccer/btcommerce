import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const MainLayout = ({children}:any) => {

  return (
    <div className="main-container">
        <Header/>
        <NavBar/>
          {children}
        <Footer/>
    </div>
  )
}

export default MainLayout;