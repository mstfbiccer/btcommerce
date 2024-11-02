import { Box } from "@mui/material";

/**
 * Banner bileşeni
 * @returns 
 */
const Banner = () => {
  return (
    <div className="banner-container">
      <Box sx={{ width: '100%', overflow: 'auto' }}>
        <img
          src="https://img.freepik.com/premium-vector/big-sale-banner-template-design-sale-offer-isolated-white-background_1312565-93.jpg"
          srcSet="https://img.freepik.com/premium-vector/big-sale-banner-template-design-sale-offer-isolated-white-background_1312565-93.jpg"
          alt="E-ticaret Banner"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </div>
  );
};

export default Banner;
