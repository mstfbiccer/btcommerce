import { useContext, useState } from "react";
import { Avatar, DialogTitle, Drawer, Input, InputAdornment, IconButton, Typography, Box, Badge, useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import BasketContext from "../store/basketContext";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const { basketCount, setBasketCount } = useContext(BasketContext);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      className="header-container"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: 2, boxShadow: 1 }}
    >
      {/* Logo Section */}
      <Box display="flex" alignItems="center">
        <Avatar src="/assets/images/placeholder.png" alt="logo" sx={{ width: 50, height: 50 }} />
        {!isMobile && (
          <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold' }}>
            BrandName
          </Typography>
        )}
      </Box>

      {/* Search Section - Show only on larger screens */}
      {!isMobile && (
        <Box flexGrow={1} mx={3}>
          <Input
            id="input-with-icon-adornment"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="Search..."
            fullWidth
            sx={{
              backgroundColor: "#f1f1f1",
              borderRadius: 1,
              px: 1,
            }}
          />
        </Box>
      )}

      {/* Actions */}
      <Box display="flex" alignItems="center">
        {/* Menu Icon for mobile */}
        {isMobile ? (
          <IconButton onClick={() => setMenuDrawerOpen(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <IconButton color="primary" sx={{ mr: 2 }}>
              <FavoriteIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={basketCount} color="secondary">
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
            Your cart is empty. Start adding items!
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
    </Box>
  );
};

export default Header;
