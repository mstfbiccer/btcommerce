import { Box, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpeedIcon from "@mui/icons-material/Speed";
import LockIcon from "@mui/icons-material/Lock";

const CompactBannerInfo = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', textAlign: 'center', mb:5 }}>
      <Grid container spacing={2} justifyContent="center">
        
        {/* Free Shipping Section */}
        <Grid item xs={12} sm={4}>
          <LocalShippingIcon sx={{ fontSize: 36, color: "#1976d2" }} />
          <Typography variant="subtitle1" component="h3" sx={{ mt: 0.5, fontWeight: 'bold' }}>
            Free Shipping
          </Typography>
          <Typography variant="body2" color="textSecondary">
            On orders over $50
          </Typography>
        </Grid>

        {/* Fast Delivery Section */}
        <Grid item xs={12} sm={4}>
          <SpeedIcon sx={{ fontSize: 36, color: "#1976d2" }} />
          <Typography variant="subtitle1" component="h3" sx={{ mt: 0.5, fontWeight: 'bold' }}>
            Fast Delivery
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Quick and reliable
          </Typography>
        </Grid>

        {/* Safe Payment Section */}
        <Grid item xs={12} sm={4}>
          <LockIcon sx={{ fontSize: 36, color: "#1976d2" }} />
          <Typography variant="subtitle1" component="h3" sx={{ mt: 0.5, fontWeight: 'bold' }}>
            Safe Payment
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Secure checkout
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompactBannerInfo;
