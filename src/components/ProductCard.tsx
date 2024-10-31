import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import BasketContext from "../store/basketContext";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
  basketCount: any;
  setBasketCount: any;
}
interface Rating {
  rate: number;
  count: number;
}

// const ProductCard = ({title, price}:ProductCardProps) 
// const ProductCard = (props:ProductCardProps)
const ProductCard = (product:ProductCardProps) => {
  const card = useRef<HTMLInputElement>(null);
  const {basketCount,setBasketCount} = useContext(BasketContext);
  console.log(card.current);
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <input ref={card} type="hidden" value={product.id} />
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
        style={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={() => {
        setBasketCount(basketCount + 1);
      }}>
        Sepete Ekle
      </Button>
    </CardActions>
  </Card>

  )

  }
export default ProductCard;