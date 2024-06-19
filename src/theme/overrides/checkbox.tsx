import { useTheme } from "@mui/material/styles";
import { OwnerStateThemeType } from ".";

const CheckedIcon = () => {
  const theme = useTheme();

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      focusable="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        fill={theme.palette.primary[50]}
      />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        stroke={theme.palette.primary.main}
      />
      <path
        d="M12 5L6.5 10.5L4 8"
        stroke={theme.palette.primary.main}
        strokeWidth="1.6666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Icon = () => {
  const theme = useTheme();

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        fill={theme.palette.common.white}
      />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        stroke={theme.palette.grey[300]}
      />
    </svg>
  );
};

const IndeterminateIcon = () => {
  const theme = useTheme();

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        fill={theme.palette.primary[50]}
      />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        stroke={theme.palette.primary.main}
      />
      <path
        d="M12 5L6.5 10.5L4 8"
        stroke={theme.palette.primary.main}
        strokeWidth="1.6666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Checkbox = () => {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <Icon />,
        checkedIcon: <CheckedIcon />,
        indeterminateIcon: <IndeterminateIcon />
      },
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          paddingRight: 6,
          marginRight: 4,
          "&:hover": {
            backgroundColor: "transparent",
            "& svg rect:first-of-type": {
              fill: theme.palette.primary[50]
            },
            "& svg rect:last-of-type": {
              stroke: theme.palette.primary.main
            }
          },
          "& svg rect:last-of-type": {
            "& rect": {
              strokeWidth: "4.2",
              stroke: "#3FC0DE"
            }
          },
          "&.MuiCheckbox-colorSecondary": {
            "&:hover": {
              backgroundColor: "transparent",
              "& svg rect:first-of-type": {
                fill: theme.palette.secondary[50]
              },
              "& svg rect:last-of-type": {
                stroke: theme.palette.secondary.main
              }
            }
          },
          "&.MuiCheckbox-colorSuccess": {
            "&:hover": {
              backgroundColor: "transparent",
              "& svg rect:first-of-type": {
                fill: theme.palette.success[50]
              },
              "& svg rect:last-of-type": {
                stroke: theme.palette.success.main
              }
            }
          },
          "&.MuiCheckbox-colorError": {
            "&:hover": {
              backgroundColor: "transparent",
              "& svg rect:first-of-type": {
                fill: theme.palette.error[50]
              },
              "& svg rect:last-of-type": {
                stroke: theme.palette.error.main
              }
            }
          },
          "&.MuiCheckbox-colorInfo": {
            "&:hover": {
              backgroundColor: "transparent",
              "& svg rect:first-of-type": {
                fill: theme.palette.info[50]
              },
              "& svg rect:last-of-type": {
                stroke: theme.palette.info.main
              }
            }
          },
          "&.Mui-checked": {
            "& svg": {
              filter: `drop-shadow(0 2px 3px rgba(${
                theme.palette.mode === "light"
                  ? theme.palette.customColors.main
                  : "12, 16, 27"
              }, 0.16))`
            },
            "&.Mui-disabled svg": {
              filter: "none",
              "& path:first-of-type": {
                fill: theme.palette.action.disabled
              },
              "& path:last-of-type": {
                fill: theme.palette.background.paper,
                stroke: theme.palette.background.paper
              }
            }
          },
          "&.Mui-disabled:not(.Mui-checked) svg": {
            stroke: theme.palette.action.disabled
          },
          "&.Mui-checked.MuiCheckbox-colorSecondary svg path": {
            stroke: theme.palette.secondary.main
          },
          "&.Mui-checked.MuiCheckbox-colorSecondary svg rect:first-of-type": {
            fill: theme.palette.secondary[50]
          },
          "&.Mui-checked.MuiCheckbox-colorSecondary svg rect:last-of-type": {
            stroke: theme.palette.secondary.main
          },

          "&.Mui-checked.MuiCheckbox-colorSuccess svg path": {
            stroke: theme.palette.success.main
          },
          "&.Mui-checked.MuiCheckbox-colorSuccess svg rect:first-of-type": {
            fill: theme.palette.success[50]
          },
          "&.Mui-checked.MuiCheckbox-colorSuccess svg rect:last-of-type": {
            stroke: theme.palette.success.main
          },

          "&.Mui-checked.MuiCheckbox-colorError svg path": {
            stroke: theme.palette.error.main
          },
          "&.Mui-checked.MuiCheckbox-colorError svg rect:first-of-type": {
            fill: theme.palette.error[50]
          },
          "&.Mui-checked.MuiCheckbox-colorError svg rect:last-of-type": {
            stroke: theme.palette.error.main
          },

          "&.Mui-checked.MuiCheckbox-colorWarning svg path": {
            stroke: theme.palette.warning.main
          },
          "&.Mui-checked.MuiCheckbox-colorWarning svg rect:first-of-type": {
            fill: theme.palette.warning[50]
          },
          "&.Mui-checked.MuiCheckbox-colorWarning svg rect:last-of-type": {
            stroke: theme.palette.warning.main
          },

          "&.Mui-checked.MuiCheckbox-colorInfo svg path": {
            stroke: theme.palette.info.main
          },
          "&.Mui-checked.MuiCheckbox-colorInfo svg rect:first-of-type": {
            fill: theme.palette.info[50]
          },
          "&.Mui-checked.MuiCheckbox-colorInfo svg rect:last-of-type": {
            stroke: theme.palette.info.main
          }
        })
      }
    }
  };
};
export default Checkbox;
