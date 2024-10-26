import { useState } from "react";
import { Avatar, DialogTitle, Drawer, Input, InputAdornment } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return(
    <div className="header-container">
      <div className="header-logo">
        <Avatar src="/assets/images/placeholder.png" alt="logo" sx={{ width: 85, height: 85 }}/>
      </div>
      <div className="search-container">
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
          placeholder="Arama yapınız..."
        />
      </div>
      <div className="header-actions">
        <span className="fav-button">
          <FavoriteIcon/>
        </span>
        <span className="cart-button" onClick={() => {
          setDrawerOpen(true);
        }}>
          <ShoppingCartIcon/>
        </span>
      </div>
      <Drawer open={drawerOpen} anchor={"right"} onClose={() => setDrawerOpen(false)}>
        <CloseIcon onClick={() => setDrawerOpen(false)}/>
        <DialogTitle></DialogTitle>
      </Drawer>
    </div>
    
  )
}

export default Header;