import { OwnerStateThemeType } from "./";

const Menu = () => {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          border: `1px solid ${theme.palette.grey[200]}`,
          borderRadius: "8px",
          boxShadow: theme.shadows[4],
          "& .MuiMenuItem-root .MuiCheckbox-root.Mui-checked path:first-of-type":
            {
              fill: theme.palette.common.white
            },
          "& .MuiMenuItem-root .MuiCheckbox-root.Mui-checked path:last-of-type":
            {
              fill: theme.palette.primary.main,
              stroke: theme.palette.primary.main
            }
        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(2, 4),
          margin: theme.spacing(0, 2, 1),
          fontSize: 14,
          fontWeight: 500,
          borderRadius: theme.shape.borderRadius,
          "&:last-child": {
            marginBottom: 0
          },
          "&:not(.Mui-focusVisible):hover": {
            color: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[50],
            "& .MuiListItemIcon-root, & .MuiListItemText-primary, & .MuiListItemText-secondary, & .MuiListItemSecondaryAction-root .MuiIconButton-root":
              {
                color: theme.palette.primary.main
              }
          },
          "&.Mui-selected": {
            fontWeight: 500,
            color: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[50],
            "&.Mui-focusVisible": {
              backgroundColor: `${theme.palette.grey[50]} !important`
            },
            "& .MuiListItemIcon-root, & .MuiListItemText-primary, & .MuiListItemText-secondary, & .MuiListItemSecondaryAction-root .MuiIconButton-root":
              {
                color: `${theme.palette.common.white} !important`
              }
          }
        })
      },
      defaultProps: {
        disableRipple: true
      }
    }
  };
};

export default Menu;
