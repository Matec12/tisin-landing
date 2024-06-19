import RouterLink from "next/link";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface LogoProps {
  disabledLink?: boolean;
  isLogoWhite?: boolean;
  sx?: TypographyProps["sx"];
}

const Logo = ({ disabledLink = false, isLogoWhite, sx }: LogoProps) => {
  if (disabledLink) {
    return (
      <Typography
        variant="textLg"
        sx={{
          fontWeight: 600,
          color: isLogoWhite ? "common.white" : "primary.main",
          ...sx
        }}
      >
        TISIN
      </Typography>
    );
  }

  return (
    <Typography
      component={RouterLink}
      href="/"
      variant="textLg"
      sx={{
        fontWeight: 600,
        color: isLogoWhite ? "common.white" : "primary.main",
        textDecoration: "none",
        ...sx
      }}
    >
      TISIN
    </Typography>
  );
};

export default Logo;
