import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MobileNavItems from "./components/mobile-nav-items";
import menuConfig from "../shared/nav-config";

interface MobileNavigationProps {
  navOpen: boolean;
  handleToggleMobileNav: () => void;
}

const MobileNavigation = (props: MobileNavigationProps) => {
  const { navOpen, handleToggleMobileNav } = props;

  return (
    <Drawer
      open={navOpen}
      anchor="right"
      variant="temporary"
      hideBackdrop
      onClose={handleToggleMobileNav}
      ModalProps={{
        keepMounted: true,
        disablePortal: true,
        sx: { top: 63, zIndex: 1000 }
      }}
      PaperProps={{
        sx: {
          top: 63,
          bgcolor: "common.white",
          width: "100%",
          height: "100vh",
          py: 6
        }
      }}
    >
      <List className="nav-items" sx={{ pt: 0, "& > :first-child": { mt: 0 } }}>
        <MobileNavItems
          handleToggleMobileNav={handleToggleMobileNav}
          sidebarNavItems={menuConfig}
        />
      </List>
    </Drawer>
  );
};

export default MobileNavigation;
