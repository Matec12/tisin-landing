import Box from "@mui/material/Box";
import NavItems from "./components/desktop-nav-items";
import menuConfig from "../shared/nav-config";
import { themeConfig } from "@/configs/theme";

interface DesktopNavigationProps {
  isOffSet: boolean;
}
const DesktopNavigation = (props: DesktopNavigationProps) => {
  const { isOffSet } = props;

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
      <NavItems navItems={menuConfig} isOffSet={isOffSet} />
    </Box>
  );
};

export default DesktopNavigation;
