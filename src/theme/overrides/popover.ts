import { OwnerStateThemeType } from "./";

const Popover = () => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[4],
          border: `1px solid ${theme.palette.grey[200]}`
        })
      }
    }
  };
};

export default Popover;
