import { ButtonProps } from "@mui/material";
import { ThemeColor } from "../palette";
import { OwnerStateThemeType } from "./";

const buttonVariantColorState = (
  variant: ButtonProps["variant"],
  color: ThemeColor | "gray" | "tertiary"
) => {
  return {
    props: { variant, color },
    style: ({ theme }: OwnerStateThemeType) => ({
      ...(variant === "text" && {
        boxShadow: `none`
      }),
      ...(variant === "outlined" &&
        (color === "gray"
          ? {
              border: `2px solid ${theme.palette.gray[300]}`,
              backgroundColor: "transparent"
            }
          : {
              color: theme.palette[color][700],
              border: `1px solid ${theme.palette[color][200]}`,
              fontWeight: 600,
              backgroundColor: theme.palette[color][50]
            })),
      "&:hover": {
        backgroundColor:
          color === "gray" || variant === "text"
            ? theme.palette[color][50]
            : variant === "outlined"
              ? theme.palette[color][100]
              : theme.palette[color][600],
        ...(variant === "outlined" &&
          color === "gray" && {
            border: `1px solid ${theme.palette.gray[300]}`
          })
      },
      "&:focus": {
        backgroundColor:
          color === "gray" || variant === "text"
            ? theme.palette.common.white
            : variant === "outlined"
              ? theme.palette[color][50]
              : theme.palette[color][600]

        // ...(variant !== "text" && {
        //   boxShadow: `0px 0px 0px 4px ${color === "gray" ? "#F2F4F7" : color === "primary" ? theme.palette[color][15] : theme.palette[color][50]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
        // })
      }
    })
  };
};

const Button = () => {
  return {
    MuiButton: {
      variants: [
        // contained
        buttonVariantColorState("contained", "primary"),
        buttonVariantColorState("contained", "secondary"),
        buttonVariantColorState("contained", "tertiary"),
        buttonVariantColorState("contained", "success"),
        buttonVariantColorState("contained", "error"),
        buttonVariantColorState("contained", "warning"),

        // text
        buttonVariantColorState("text", "primary"),
        buttonVariantColorState("text", "secondary"),
        buttonVariantColorState("text", "tertiary"),
        buttonVariantColorState("text", "success"),
        buttonVariantColorState("text", "error"),
        buttonVariantColorState("text", "warning"),
        buttonVariantColorState("text", "gray"),

        // outlined
        buttonVariantColorState("outlined", "primary"),
        buttonVariantColorState("outlined", "secondary"),
        buttonVariantColorState("outlined", "tertiary"),
        buttonVariantColorState("outlined", "success"),
        buttonVariantColorState("outlined", "error"),
        buttonVariantColorState("outlined", "warning"),
        buttonVariantColorState("outlined", "gray")
      ],
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          // color: "black",
          minWidth: 50,
          fontSize: 14,
          fontWeight: 500,
          textTransform: "none",
          lineHeight: "20px",
          padding: theme.spacing(2.5, 4),
          "&:not(.Mui-disabled):active": {
            transform: "scale(0.98)"
          },
          boxShadow: theme.shadows[1],
          transition: theme.transitions.create(
            [
              "background-color",
              "box-shadow",
              "border-color",
              "color",
              "transform"
            ],
            { duration: theme.transitions.duration.shortest }
          )
        }),
        endIcon: ({ ownerState }: OwnerStateThemeType) => ({
          ...(ownerState.size === "small" && {
            "& > *:nth-of-type(1)": {
              fontSize: "1rem"
            }
          }),
          ...(ownerState.size === "medium" && {
            "& > *:nth-of-type(1)": {
              fontSize: "1.125rem"
            }
          }),
          ...(ownerState.size === "large" && {
            "& > *:nth-of-type(1)": {
              fontSize: "1.25rem"
            }
          })
        }),
        startIcon: ({ ownerState }: OwnerStateThemeType) => ({
          ...(ownerState.size === "small" && {
            "& > *:nth-of-type(1)": {
              fontSize: "1rem"
            }
          }),
          ...(ownerState.size === "medium" && {
            "& > *:nth-of-type(1)": {
              fontSize: "1.125rem"
            }
          }),
          ...(ownerState.size === "large" && {
            "& > *:nth-of-type(1)": {
              fontSize: "1.25rem"
            }
          })
        }),
        sizeXs: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: "16px",
          fontSize: 12,
          padding: theme.spacing(1.5, 4.5)
        }),
        sizeSmall: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: "20px",
          fontSize: 14,
          padding: theme.spacing(2, 3.5)
        }),
        sizeMedium: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: "20px",
          fontSize: 14,
          padding: theme.spacing(2.5, 4)
        }),
        sizeLarge: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: "24px",
          fontSize: 16,
          padding: theme.spacing(2.5, 4.5)
        }),
        sizeXl: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: "24px",
          fontSize: 16,
          padding: theme.spacing(3.5, 5)
        }),
        size2xl: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: "28px",
          fontSize: "18px",
          padding: theme.spacing(4, 7)
        })
      }
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true, variant: "contained" }
    }
  };
};

export default Button;
