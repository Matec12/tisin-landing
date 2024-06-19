import { ChipProps } from "@mui/material";
import { ThemeColor } from "../palette";
import { OwnerStateThemeType } from "./";
import { hexToRGBA } from "@/libs/hex-to-rgba";

const chipVariantColorState = (
  variant: ChipProps["variant"],
  color: ThemeColor | "grey" | "tertiary"
) => {
  return {
    props: { variant, color },
    style: ({ theme }: OwnerStateThemeType) => ({
      ...(variant === "outlined" &&
        (color === "grey"
          ? {
              border: `1px solid ${theme.palette.grey[300]}`,
              backgroundColor: theme.palette.common.white
            }
          : {
              color: theme.palette[color][600],
              border: `1px solid ${theme.palette[color][600]}`,
              fontWeight: 600,
              backgroundColor: theme.palette[color][50]
            }))
    })
  };
};

const Chip = () => {
  return {
    MuiChip: {
      variants: [
        // filled
        chipVariantColorState("filled", "primary"),
        chipVariantColorState("filled", "secondary"),
        chipVariantColorState("filled", "tertiary"),
        chipVariantColorState("filled", "success"),
        chipVariantColorState("filled", "error"),
        chipVariantColorState("filled", "warning"),
        chipVariantColorState("filled", "grey"),

        // outlined
        chipVariantColorState("outlined", "primary"),
        chipVariantColorState("outlined", "secondary"),
        chipVariantColorState("outlined", "tertiary"),
        chipVariantColorState("outlined", "success"),
        chipVariantColorState("outlined", "error"),
        chipVariantColorState("outlined", "warning"),
        chipVariantColorState("outlined", "grey")
      ],
      styleOverrides: {
        root: ({ ownerState }: OwnerStateThemeType) => ({
          fontWeight: 500,
          fontSize: 14,
          ...(ownerState.size === "medium" && {
            height: 30
          }),
          ...(ownerState.size === "small" && {
            fontSize: 12
          }),
          "&.MuiChip-rounded": {
            borderRadius: 4
          }
        }),
        outlined: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiChip-colorDefault": {
            borderColor: `rgba(${theme.palette.customColors.main}, 0.2)`
          }
        }),
        labelSmall: ({ theme }: OwnerStateThemeType) => ({
          paddingLeft: theme.spacing(2.5),
          paddingRight: theme.spacing(2.5)
        }),
        deleteIcon: {
          width: 18,
          height: 18
        },
        avatar: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        }),
        deletableColorPrimary: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiChip-light .MuiChip-deleteIcon": {
            color: hexToRGBA(theme.palette.primary.main, 0.7),
            "&:hover": {
              color: theme.palette.primary.main
            }
          }
        }),
        deletableColorSecondary: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiChip-light .MuiChip-deleteIcon": {
            color: hexToRGBA(theme.palette.secondary.main, 0.7),
            "&:hover": {
              color: theme.palette.secondary.main
            }
          }
        }),
        deletableColorSuccess: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiChip-light .MuiChip-deleteIcon": {
            color: hexToRGBA(theme.palette.success.main, 0.7),
            "&:hover": {
              color: theme.palette.success.main
            }
          }
        }),
        deletableColorError: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiChip-light .MuiChip-deleteIcon": {
            color: hexToRGBA(theme.palette.error.main, 0.7),
            "&:hover": {
              color: theme.palette.error.main
            }
          }
        }),
        deletableColorWarning: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiChip-light .MuiChip-deleteIcon": {
            color: hexToRGBA(theme.palette.warning.main, 0.7),
            "&:hover": {
              color: theme.palette.warning.main
            }
          }
        }),
        deletableColorInfo: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiChip-light .MuiChip-deleteIcon": {
            color: hexToRGBA(theme.palette.info.main, 0.7),
            "&:hover": {
              color: theme.palette.info.main
            }
          }
        })
      }
    }
  };
};

export default Chip;
