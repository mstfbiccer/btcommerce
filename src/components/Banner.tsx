import { Box } from "@mui/material";

/**
 * Banner component
 * @returns 
 */
const Banner = () => {

return(
  <div className="banner-container">
    <Box sx={{ width: 300, resize: 'horizontal', overflow: 'auto', p: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
    </Box>
  </div>)
}

export default Banner;