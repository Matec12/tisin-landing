import RouterLink from "next/link";
import Box from "@mui/material/Box";
import Image, { ImageProps } from "../image";

interface LogoProps {
  disabledLink?: boolean;
  isFull?: boolean;
  isLogoWhite?: boolean;
  isLogoBlack?: boolean;
  sx?: ImageProps["sx"];
}

const Logo = ({
  disabledLink = false,
  isFull,
  isLogoWhite,
  isLogoBlack,
  sx
}: LogoProps) => {
  const logoGreen = isFull
    ? "/brands/brand-green-full.svg"
    : "/brands/brand-green.svg";

  const logoWhite = isFull
    ? "/brands/brand-white-full.svg"
    : "/brands/brand-white.svg";

  const logoBlack = isFull
    ? "/brands/brand-black-full.svg"
    : "/brands/brand-black.svg";

  const logo = isLogoWhite ? logoWhite : isLogoBlack ? logoBlack : logoGreen;

  if (disabledLink) {
    return (
      <Box component={Image} src={logo} alt="brand" sx={{ width: 80, ...sx }} />
    );
  }

  return (
    <RouterLink href="/">
      <Box component={Image} src={logo} alt="brand" sx={{ width: 80, ...sx }} />
    </RouterLink>
  );
};

export default Logo;
