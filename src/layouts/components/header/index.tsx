import { useState } from "react";
import RouterLink from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { useOffSetTop, useResponsive } from "@/hooks";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@/components/mui/container";
import IconButton from "@mui/material/IconButton";
import Icon from "@/components/icon";
import Logo from "@/components/logo";
import DesktopNavigation from "./components/desktop";
import MobileNavigation from "./components/mobile";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const pathname = usePathname();
  const theme = useTheme();
  const lgBelow = useResponsive("down", "md");
  const isOffSet = useOffSetTop(90);

  const isHome = pathname === "/";

  const handleToggleMobileNav = () => setNavOpen((prev) => !prev);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent", zIndex: 99999999 }}>
      <Toolbar
        sx={{
          px: `0 !important`,
          py: 2,
          minHeight: `${
            (theme.mixins.toolbar.minHeight as number) - 1
          }px !important`,
          ...((isOffSet || !isHome) && {
            bgcolor: "common.white",
            transition: "opacity 0.5s ease",
            boxShadow: theme.shadows[1]
          })
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Logo isFull isLogoWhite={isHome && !isOffSet} />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {lgBelow ? (
              <MobileNavigation
                navOpen={navOpen}
                handleToggleMobileNav={handleToggleMobileNav}
              />
            ) : (
              <DesktopNavigation isOffSet={isOffSet} />
            )}
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, ml: 4 }}>
              {lgBelow ? (
                <IconButton
                  onClick={handleToggleMobileNav}
                  sx={{
                    color: !isHome || isOffSet ? "grey.500" : "common.white"
                  }}
                >
                  <Icon icon="hugeicons:menu-02" rotate={90} />
                </IconButton>
              ) : (
                <>
                  <Button
                    LinkComponent={RouterLink}
                    target="_blank"
                    rel="noopener"
                    href="/#"
                    variant={!isHome || isOffSet ? "outlined" : "text"}
                    color="gray"
                    sx={{
                      backgroundColor: "common.white",
                      color: "primary.main",
                      "&:hover": { bgcolor: "primary.15" }
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    LinkComponent={RouterLink}
                    target="_blank"
                    rel="noopener"
                    href="/#"
                    variant="contained"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
