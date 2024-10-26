import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/product" className="nav-item">Product</Link>
    </div>
  );
}

export default NavBar;