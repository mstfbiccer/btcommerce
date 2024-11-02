import { Box, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * Footer component
 * @returns 
 * @example
 * <Footer />
 */
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mt: 4 }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} e-Commerce. All rights reserved.
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="https://facebook.com" color="#3b5998" target="_blank">
          <FacebookIcon sx={{ color: "#3b5998" }} />
        </Link>
        <Link href="https://twitter.com" color="#1da1f2" target="_blank">
          <TwitterIcon sx={{ color: "#1da1f2" }} />
        </Link>
        <Link href="https://instagram.com" color="#e1306c" target="_blank">
          <InstagramIcon sx={{ color: "#e1306c" }} />
        </Link>
        <Link href="https://linkedin.com" color="#0077b5" target="_blank">
          <LinkedInIcon sx={{ color: "#0077b5" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
