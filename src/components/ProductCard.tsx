import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Rating, Grid } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BasketContext from "../store/basketContext";

interface ProductDetailProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: RatingProps;
}

interface RatingProps {
  rate: number;
  count: number;
}

const ProductDetail = ({ id, title, price, description, category, image, rating }: ProductDetailProps) => {
  const { basketCount, setBasketCount } = useContext(BasketContext);

  return (
    <Card sx={{ maxWidth: 900, mx: 'auto', marginTop:"20px", p: 3, boxShadow: 4 }}>
      <Grid container spacing={3}>
        {/* Left Side: Product Image */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            height="400"
            image={image}
            alt={title}
            sx={{ objectFit: 'contain', borderRadius: 2 }}
          />
        </Grid>

        {/* Right Side: Product Details */}
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              Category: {category}
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <Rating value={rating?.rate || 0} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                ({rating?.count} reviews)
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <Typography variant="h5" color="primary" sx={{ mb: 4 }}>
              ${price.toFixed(2)}
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setBasketCount(basketCount + 1)}
              >
                Add to Basket
              </Button>
              <Link to="/basket" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                <Button variant="outlined" color="secondary">
                  View Basket
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductDetail;
