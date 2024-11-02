import {useEffect, useState } from "react";
import { Avatar, DialogTitle, Drawer, Input, InputAdornment, IconButton, Typography, Box, Badge, useMediaQuery, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getProductDataByIdList } from "../store/reducers/productOperations";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { add, clearAll, remove } from "../store/reducers/basketOperations";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import Login from "./Login";
/**
 * Header component
 * @returns 
 */
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  // const { basketCount, setBasketCount } = useContext(BasketContext);
  const isMobile = useMediaQuery("(max-width:600px)");
  const basketItems = useSelector((state:RootState) => state.basketOperations.products);
  // Array.reduce fonksiyonu
  const getTotalQuantity = basketItems.reduce((acc, item) => acc + item.quantity, 0);

  const productDetails = useSelector((state:RootState) => state.productOperations.productDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    const productIDs = basketItems.map((item) => item.id);
    dispatch(getProductDataByIdList(productIDs));
  },[basketItems])

  const mergeBasketItemsWithProductDetails = () => {
    return basketItems.map((item) => {
      const product = productDetails.data.find((product:any) => product.id === item.id) as any;
      return {
        ...item,
        product,
      };
    }
    );
  }

  const basketData = mergeBasketItemsWithProductDetails();
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
  return (
    <Box
      className="header-container"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: 2, boxShadow: 1 }}
    >
      {/* Logo Section */}
      <Box display="flex" alignItems="center" style={{
        cursor: "pointer"
      }} onClick={
        () => {
          navigate("/");
        }
      }>
        <Avatar src="/assets/images/placeholder.png" alt="logo" sx={{ width: 50, height: 50 }} />
        {!isMobile && (
          <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold' }}>
            e-Commerce
          </Typography>
        )}
      </Box>

      {/* Search Section - Show only on larger screens */}
      <Box flexGrow={1} mx={3}>
        <Search/>
      </Box>

      {/* Actions */}
      <Box display="flex" alignItems="center">
        {/* Menu Icon for mobile */}
        {isMobile ? (
          <IconButton onClick={() => setMenuDrawerOpen(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <IconButton color="primary" sx={{ mr: 2 }} onClick={
              () => {
                setLoginModal(true);
              }
            }>
              <PersonIcon/>
            </IconButton>

            <IconButton color="primary" sx={{ mr: 2 }}>
              <FavoriteIcon />
            </IconButton>


            <IconButton
              color="primary"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              {/* use context kullanımı
              
              <Badge badgeContent={basketCount} color="secondary">
                <ShoppingCartIcon />
              </Badge> */}
              <Badge badgeContent={getTotalQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </>
        )}
      </Box>

      {/* Drawer for Cart */}
      <Drawer open={drawerOpen} anchor="right" onClose={() => setDrawerOpen(false)}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
          <DialogTitle>Shopping Cart</DialogTitle>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
          {basketData.length === 0 && "No items in the cart"}
          {basketData.map((item) => (
            <Box key={item.id} display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Box display="flex" alignItems="center">
                <Avatar src={item?.product?.image} alt={item?.product?.title} sx={{ width: 50, height: 50 }} />
                <Box ml={2}>
                  <Typography variant="body1">{item?.product?.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item?.product?.price}</Typography>
                </Box>
              </Box>
              {/* fancy dynamic quantity with basket add & remove */}
              <Box display="flex" alignItems="center">
                <IconButton onClick={() => {
                  dispatch(remove({id: item.id, quantity: 1}));
                }}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography variant="body1">{item.quantity}</Typography>
                <IconButton onClick={
                  () => {
                    dispatch(add({id: item.id, quantity: 1}));
                  }
                }>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
           {/* clearAll button full width */}
           {basketData.length > 0 && (
            <Button variant="contained" style={{marginTop: "10px"}} color="error" fullWidth onClick={() => {
              dispatch(clearAll());
              setDrawerOpen(false);
            }}>Clear All</Button>
           )}
          </Typography>
        </Box>
      </Drawer>

      {/* Drawer for Menu on Mobile */}
      <Drawer open={menuDrawerOpen} anchor="left" onClose={() => setMenuDrawerOpen(false)}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={() => setMenuDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Menu items */}
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" gutterBottom>Home</Typography>
          <Typography variant="body1" gutterBottom>Products</Typography>
          <Typography variant="body1" gutterBottom>Contact</Typography>
        </Box>
      </Drawer>
      <Login open={loginModal} onClose={() => {
        setLoginModal(false);
      }} />
    </Box>
  );
};

export default Header;
