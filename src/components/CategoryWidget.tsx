import { Card, CardContent, Typography, Box, Grid, Rating, CardMedia, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSpecificCategory } from "../store/reducers/productOperations";
import BasketAdd from "../uiComponents/BasketAdd";
import { add } from "../store/reducers/basketOperations";


interface CategoryWidgetProps {
  categories: string[];
  activeProducts: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: { rate: number; count: number };
  }[];
  loading: boolean;
}

const CategoryWidget = ({ categories, activeProducts, loading }: CategoryWidgetProps) => {
  const dispatch = useDispatch();

  // button styled component

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: "100%",
        mx: "auto",
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Grid container spacing={2}>
        {/* Left Side: Categories in a Vertical List */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {categories.map((category) => (
              <Box
                key={category}
                onClick={() => dispatch(getSpecificCategory(category))}
                sx={{
                  p: 1,
                  cursor: "pointer",
                  borderRadius: 1,
                  bgcolor: "primary.light",
                  color: "primary.contrastText",
                  textAlign: "center",
                  transition: "background-color 0.3s",
                  "&:hover": { bgcolor: "primary.main" },
                }}
              >
                <Typography variant="body2">{category}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Side: Product Cards or Spinner */}
        <Grid item xs={12} md={9}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <Grid container spacing={2}>
              {activeProducts.slice(0, 3).map((product) => (
                <Grid item xs={12} sm={4} key={product.id}>
                  <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxShadow: 2,
                        borderRadius: 2,
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "scale(1.02)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.title}
                        sx={{
                          width: "100%",
                          height: 140,
                          objectFit: "contain",
                          borderRadius: "8px 8px 0 0",
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 500, color: "text.primary" }}>
                          {product.title}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ mt: 1, mb: 1 }}>
                          ${product.price.toFixed(2)}
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center">
                          <Rating value={product.rating.rate} precision={0.5} readOnly />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                            ({product.rating.count})
                          </Typography>
                        </Box>
                        <Box mt={2}>
                          {/* styled component */}
                          <BasketAdd onClick={() => {
                            dispatch(add({id:product.id, quantity:1}));
                          }}>Add to Basket</BasketAdd>
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryWidget;
