import { useState } from "react";
import RouterLink from "next/link";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@/components/mui/container";
import Logo from "@/components/logo";
import { useOffSetTop, useResponsive } from "@/hooks";
import DesktopNavigation from "./components/desktop";
import MobileNavigation from "./components/mobile";
import { IconButton } from "@mui/material";
import Icon from "@/components/icon";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const theme = useTheme();
  const lgBelow = useResponsive("down", "md");
  const isOffSet = useOffSetTop(90);
  const handleToggleMobileNav = () => setNavOpen((prev) => !prev);

  return (
    <AppBar
      color="default"
      position="fixed"
      sx={{
        backgroundColor: isOffSet ? "background.paper" : "transparent",
        py: 2,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar
        sx={{
          p: `0 !important`,
          minHeight: `${
            (theme.mixins.toolbar.minHeight as number) - 1
          }px !important`
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Logo />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {lgBelow ? (
              <MobileNavigation
                navOpen={navOpen}
                handleToggleMobileNav={handleToggleMobileNav}
              />
            ) : (
              <DesktopNavigation />
            )}
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, ml: 4 }}>
              {lgBelow ? (
                <IconButton
                  onClick={handleToggleMobileNav}
                  sx={{ color: "grey.500" }}
                >
                  <Icon icon="hugeicons:menu-02" rotate={90} />
                </IconButton>
              ) : (
                <>
                  <Button
                    LinkComponent={RouterLink}
                    target="_blank"
                    rel="noopener"
                    href="https://app.tisin.com/login"
                    variant="outlined"
                    color="grey"
                  >
                    Login
                  </Button>
                  <Button
                    LinkComponent={RouterLink}
                    target="_blank"
                    rel="noopener"
                    href="https://app.tisin.com/get-started"
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
