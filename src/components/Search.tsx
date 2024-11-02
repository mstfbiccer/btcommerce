import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getProductsData } from "../store/reducers/productOperations";
import { Box, Input, InputAdornment, Modal, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const modalStyle = {
  position: 'absolute' as 'absolute',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 400,
  overflow: 'auto',
};

const modalProductStyle = {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
  padding: 1,
};


// search input with modal in products data from axios
const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const products = useSelector((state:RootState) => state.productOperations.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  },[]);

  useEffect(() => {
    if(open === false) {
      setSearchValue('');
      setSearchResults([]);
    }
  },[open]);

  const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length > 0) {
      const results = products.data.filter((product:any) => product.title.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }
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
              backgroundColor: "#f1f1f1",
              borderRadius: 1,
              px: 1,
            }}
            autoFocus
          />
          {searchResults.map((product:any) => (
            <Box
              key={product.id}
              sx={modalProductStyle}
              onClick={() => {
                setOpen(false);
                navigate(`/products/${product.id}`);
              }}
            >
              <img src={product.image} alt={product.title} style={{ width: 50, height: 50 }} />
              <Typography variant="body2">{product.title}</Typography>
            </Box>
          ))}

          {searchResults.length === 0 && (
            <Typography variant="body2">No results found</Typography>
          )}
        </Box>
      </Modal>      
    </Box>
  );
}
export default Search;