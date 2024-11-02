import { styled } from '@mui/system';
const BasketAdd = styled('button')({
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: 'darkgreen',
  },
});

export default BasketAdd;