import { OwnerStateThemeType } from "./";

const Drawer = () => {
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[7]
        })
      }
    }
  };
};

export default Drawer;
