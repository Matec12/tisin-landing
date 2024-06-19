import Box from "@mui/material/Box";
import NavItems from "./components/desktop-nav-items";
import menuConfig from "../shared/nav-config";
import { themeConfig } from "@/configs/theme";

const DesktopNavigation = () => {
  return (
    <Box
      className="menu-content"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        "& > *": {
          "&:not(:last-child)": { mr: 1 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 200 })
        }
      }}
    >
      <NavItems navItems={menuConfig} />
    </Box>
  );
};

export default DesktopNavigation;
