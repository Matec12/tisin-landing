import { OwnerStateThemeType } from "./";

const Autocomplete = () => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        popper: ({ theme }: OwnerStateThemeType) => ({
          ".MuiPaper-root": {
            marginTop: 4,
            boxShadow: theme.shadows[0],
            border: `1px solid ${theme.palette.divider}`,
            "& .MuiAutocomplete-option .MuiListItemButton-root:hover": {
              backgroundColor: "transparent"
            },
            "&.custom-autocomplete-paper": {
              ...theme.typography.body1,
              "& .MuiAutocomplete-option": {
                "&.Mui-focused": {
                  color: theme.palette.grey[900],
                  backgroundColor: theme.palette.grey[50],
                  "& .MuiTypography-root, & svg": {
                    color: "inherit"
                  }
                },
                '&[aria-selected="true"]': {
                  color: theme.palette.grey[900],
                  backgroundColor: theme.palette.grey[50],
                  "& .MuiTypography-root, & svg": {
                    color: "inherit"
                  }
                },
                "& .MuiCheckbox-root.Mui-checked path:first-of-type": {
                  fill: theme.palette.common.white
                },
                "& .MuiCheckbox-root.Mui-checked path:last-of-type": {
                  fill: theme.palette.primary.main,
                  stroke: theme.palette.primary.main
                }
              }
            }
          }
        }),
        inputRoot: {
          "& .MuiAutocomplete-tagSizeSmall": {
            height: 22
          }
        }
      }
    }
  };
};

export default Autocomplete;
