import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getProductsData } from "../store/reducers/productOperations";
import { Box, Input, InputAdornment, Modal, Typography, Card, CardContent, Chip, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';

const modalStyle = {
  position: 'absolute' as 'absolute',
  width: '80%', // Adjust width as needed
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  maxHeight: '80vh', // Set a max height
  overflowY: 'auto', // Allow vertical scrolling
};

const searchBarStyle = {
  position: 'sticky',
  top: 0,
  backgroundColor: '#fff', // Set the background color to white
  zIndex: 1,
  padding: 1,
  borderRadius: 1,
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Optional: add a slight shadow
};

const modalProductStyle = {
  display: 'flex',
  padding: 1,
  borderRadius: 1,
  cursor: 'pointer',
  marginBottom: 1, // Adjust margin for spacing
  boxShadow: 'none', // Remove box shadow for a flatter design
};

// Search input with modal in products data from axios
const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const products = useSelector((state: RootState) => state.productOperations.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  useEffect(() => {
    if (!open) {
      setSearchValue('');
      setSearchResults([]);
    }
  }, [open]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length > 0) {
      const results = products.data.filter((product: any) => 
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Input
        id="input-with-icon-adornment"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        placeholder="Search..."
        fullWidth
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: "#f1f1f1",
          borderRadius: 1,
          px: 1,
        }}
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={searchBarStyle}>
            <Box display="flex" alignItems="center">
              <Input
                id="input-with-icon-adornment"
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                }
                placeholder="Search..."
                fullWidth
                value={searchValue}
                onChange={handleSearch}
                sx={{
                  backgroundColor: "#fff", // White background for the search input
                  borderRadius: 1,
                  mb: 1,
                }}
                autoFocus
              />
              <IconButton onClick={() => setOpen(false)} sx={{ ml: 1 }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="stretch">
            {searchResults.map((product: any) => (
              <Card sx={modalProductStyle} key={product.id} onClick={() => {
                setOpen(false);
                navigate(`/products/${product.id}`);
              }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    style={{ 
                      width: '60px', // Smaller width
                      height: '60px', // Smaller height
                      borderRadius: '50%', // Make images round
                      marginRight: 16 
                    }} 
                  />
                  <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', minHeight: '40px' }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{product.category}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
                      {product.categories && product.categories.map((category: string) => (
                        <Chip key={category} label={category} size="small" sx={{ margin: '2px' }} />
                      ))}
                    </Box>
                    <Rating 
                      name={`product-rating-${product.id}`} 
                      value={product.rating.rate} 
                      precision={0.5} 
                      readOnly 
                      size="small" 
                      sx={{ mb: 1 }} 
                    />
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
            {searchResults.length === 0 && (
              <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, width: '100%' }}>No results found</Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Search;
