import { OwnerStateThemeType } from "./";
import { hexToRGBA } from "@/libs/hex-to-rgba";

const Alert = () => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          fontWeight: 400,
          lineHeight: 1.467,
          alignItems: "flex-start",
          padding: theme.spacing(1.25, 3.5),
          borderRadius: "12px",
          fontSize: theme.typography.body2.fontSize,
          "& .MuiAlertTitle-root": {
            marginBottom: theme.spacing(2.5)
          },
          "& a": {
            fontWeight: 700,
            color: "inherit"
          }
        }),
        icon: ({ theme }: OwnerStateThemeType) => ({
          opacity: 1,
          fontSize: "1.125rem",
          padding: theme.spacing(2.5),
          borderRadius: "50%",
          margin: theme.spacing(1.75, 2.5, 1.75, 0),
          "& + .MuiAlert-message": {
            padding: theme.spacing(2.25, 0)
          },
          "& ~ .MuiAlert-action": {
            paddingTop: theme.spacing(1.75)
          }
        }),
        message: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(1.75, 0)
        }),
        action: ({ theme }: OwnerStateThemeType) => ({
          paddingTop: theme.spacing(1.25),
          "& svg": {
            fontSize: "1rem"
          }
        }),
        standard: ({ theme }: OwnerStateThemeType) => ({
          "& .MuiAlert-icon": {
            backgroundColor: theme.palette.background.paper
          }
        }),
        standardSuccess: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.success.main,
          backgroundColor: hexToRGBA(theme.palette.success.main, 0.16),
          "& .MuiAlertTitle-root": {
            color: theme.palette.success.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.success.main
          }
        }),
        standardInfo: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.info.main,
          backgroundColor: hexToRGBA(theme.palette.info.main, 0.16),
          "& .MuiAlertTitle-root": {
            color: theme.palette.info.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.info.main
          }
        }),
        standardWarning: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.warning.main,
          backgroundColor: hexToRGBA(theme.palette.warning.main, 0.16),
          "& .MuiAlertTitle-root": {
            color: theme.palette.warning.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main
          }
        }),
        standardError: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.error.main,
          backgroundColor: hexToRGBA(theme.palette.error.main, 0.16),
          "& .MuiAlertTitle-root": {
            color: theme.palette.error.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.error.main
          }
        }),
        outlined: ({ theme }: OwnerStateThemeType) => ({
          // border: "1px solid",
          padding: theme.spacing(1, 3.25)
        }),
        outlinedPrimary: ({ theme }: OwnerStateThemeType) => ({
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.primary.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary[25]
          }
        }),
        outlinedSuccess: ({ theme }: OwnerStateThemeType) => ({
          borderColor: theme.palette.success.main,
          color: theme.palette.success.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.success.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success[25]
          }
        }),
        outlinedInfo: ({ theme }: OwnerStateThemeType) => ({
          borderColor: theme.palette.info.main,
          color: theme.palette.info.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.info.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.info.main,
            backgroundColor: theme.palette.info[25]
          }
        }),
        outlinedWarning: ({ theme }: OwnerStateThemeType) => ({
          borderColor: theme.palette.warning.main,
          color: theme.palette.warning.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.warning.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main,
            backgroundColor: theme.palette.warning[25]
          }
        }),
        outlinedError: ({ theme }: OwnerStateThemeType) => ({
          borderColor: theme.palette.error.main,
          color: theme.palette.error.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.error.main
          },
          "& .MuiAlert-icon": {
            color: theme.palette.error.main,
            backgroundColor: theme.palette.error[25]
          }
        }),
        filled: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.common.white,
          "& .MuiAlert-icon": {
            backgroundColor: theme.palette.common.white
          }
        }),
        filledSuccess: ({ theme }: OwnerStateThemeType) => ({
          "& .MuiAlert-icon": {
            color: theme.palette.success.main
          }
        }),
        filledInfo: ({ theme }: OwnerStateThemeType) => ({
          "& .MuiAlert-icon": {
            color: theme.palette.info.main
          }
        }),
        filledWarning: ({ theme }: OwnerStateThemeType) => ({
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main
          }
        }),
        filledError: ({ theme }: OwnerStateThemeType) => ({
          "& .MuiAlert-icon": {
            color: theme.palette.error.main
          }
        })
      }
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginTop: 0,
          lineHeight: 1.3334,
          fontSize: "1.125rem"
        }
      }
    }
  };
};

export default Alert;
