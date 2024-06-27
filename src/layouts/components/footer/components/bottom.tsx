import RouterLink, { LinkProps } from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@/components/mui/container";
import Typography from "@mui/material/Typography";

const StyledCompanyName = styled(RouterLink)<LinkProps>(({ theme }) => ({
  fontWeight: 500,
  textDecoration: "none",
  color: `${theme.palette.primary[25]} !important`
}));

const menuConfig = [
  {
    title: "Contact us",
    path: "/contact"
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy"
  },
  {
    title: "Terms & Conditions",
    path: "/terms"
  }
];

const FooterBottom = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: { sm: "center" },
        gap: 4,
        py: 6,
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" }
      }}
    >
      <Typography
        variant="textSm"
        sx={{
          mr: 2,
          display: "flex",
          color: "common.white"
        }}
      >
        {`© ${new Date().getFullYear()} `}
        <Typography
          component={StyledCompanyName}
          href="/"
          fontWeight={500}
          variant="textSm"
          sx={{ ml: 1 }}
        >
          TISIN. All rights reserved
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 4
        }}
      >
        {menuConfig?.map((menu) => (
          <Typography
            key={menu.title}
            component={RouterLink}
            href={menu.path}
            sx={{
              textDecoration: "none",
              color: "common.white",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 500,
              "&:hover": {
                color: "primary.25"
              }
            }}
          >
            {menu.title}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default FooterBottom;
