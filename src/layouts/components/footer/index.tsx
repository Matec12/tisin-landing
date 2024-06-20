import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FooterTop from "./components/top";
import FooterBottom from "./components/bottom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary[950],
        py: 6,
        boxShadow: "none"
      }}
    >
      <FooterTop />
      <Divider sx={{ borderColor: "primary.100" }} />
      <FooterBottom />
    </Box>
  );
};

export default Footer;
