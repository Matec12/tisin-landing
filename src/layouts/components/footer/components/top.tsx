import RouterLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@/components/mui/container";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Logo from "@/components/logo";
import Icon from "@/components/icon";

const menuConfig = [
  {
    title: "About us",
    path: "/#about"
  },
  {
    title: "Apply",
    path: "/apply"
  },
  {
    title: "Testimonials",
    path: "/#about"
  },
  {
    title: "FAQs",
    path: "/#faqs"
  }
];

const socialsConfig = [
  {
    title: "Facebook",
    icon: "ri:facebook-fill",
    path: "/#"
  },
  {
    title: "Twitter",
    icon: "ri:twitter-x-fill",
    path: "/#"
  },
  {
    title: "Instagram",
    icon: "ri:instagram-line",
    path: "/#"
  },
  {
    title: "LinkedIn",
    icon: "ri:linkedin-fill",
    path: "/#"
  }
];
const FooterTop = () => {
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
      <Box
        sx={{
          display: "flex",
          alignItems: { sm: "center" },
          gap: { xs: 4, sm: 8 },
          flexDirection: "row"
        }}
      >
        <Logo isLogoWhite />
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
              variant="textSm"
              sx={{
                textDecoration: "none",
                color: "common.white",
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 6
        }}
      >
        {socialsConfig?.map((social) => (
          <Tooltip key={social.title} placement="top" title={social.title}>
            <Box
              component={RouterLink}
              href={social.path}
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: "none",
                color: "common.white",
                fontWeight: 500,
                "&:hover": {
                  color: "primary.25"
                }
              }}
            >
              <Icon icon={social.icon} />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Container>
  );
};

export default FooterTop;
