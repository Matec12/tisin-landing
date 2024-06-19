import { useTheme } from "@mui/material/styles";
import { OwnerStateThemeType } from "./";

const CheckedIcon = () => {
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
        rx="7.5"
        fill={theme.palette.primary[50]}
      />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="7.5"
        stroke={theme.palette.primary.main}
      />
      <circle cx="8" cy="8" r="3" fill={theme.palette.primary.main} />
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
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="7.5"
        stroke={theme.palette.grey[300]}
      />
    </svg>
  );
};

const Radio = () => {
  return {
    MuiRadio: {
      defaultProps: {
        icon: <Icon />,
        checkedIcon: <CheckedIcon />
      },

      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
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
          "&.Mui-checked": {
            "& svg": {
              filter: `drop-shadow(0 2px 3px rgba(${
                theme.palette.mode === "light"
                  ? theme.palette.customColors.main
                  : "12, 16, 27"
              }, 0.16))`
            },
            "&.Mui-disabled svg": {
              opacity: 0.4,
              filter: "none",
              "& path:first-of-type": {
                fill: theme.palette.text.disabled
              },
              "& path:last-of-type": {
                fill: theme.palette.common.white,
                stroke: theme.palette.common.white,
                opacity: theme.palette.mode === "dark" ? 0.5 : 0.9
              }
            }
          },
          "&.Mui-disabled:not(.Mui-checked) svg": {
            opacity: 0.5
          },
          "&.Mui-checked.MuiRadio-colorSecondary svg path:first-of-type": {
            fill: theme.palette.secondary.main
          },
          "&.Mui-checked.MuiRadio-colorSuccess svg path:first-of-type": {
            fill: theme.palette.success.main
          },
          "&.Mui-checked.MuiRadio-colorError svg path:first-of-type": {
            fill: theme.palette.error.main
          },
          "&.Mui-checked.MuiRadio-colorWarning svg path:first-of-type": {
            fill: theme.palette.warning.main
          },
          "&.Mui-checked.MuiRadio-colorInfo svg path:first-of-type": {
            fill: theme.palette.info.main
          }
        })
      }
    }
  };
};

export default Radio;
