import { Palette } from "@mui/material";
import { hexToRGBA } from "@/libs/hex-to-rgba";

const DefaultPalette = (): Palette => {
  const whiteColor = "#FFFFFF";
  const blackColor = "#000000";
  const primaryColor = {
    15: "#E6EBE8",
    25: "#C1CEC5",
    50: "#91AB9A",
    100: "#6A8C75",
    200: "#4D755B",
    300: "#3A6049",
    400: "#2C4C39",
    500: "#19381F",
    600: "#16331C",
    700: "#132D19",
    800: "#102715",
    900: "#0C2112",
    950: "#081B0E"
  };
  const secondaryColor = {
    15: "#FDFCE5",
    25: "#FBF9C8",
    50: "#F8F399",
    100: "#F5ED6A",
    200: "#F3E93D",
    300: "#E0D330",
    400: "#CCC027",
    500: "#EEE82C",
    600: "#D6CF26",
    700: "#BFB622",
    800: "#A79D1D",
    900: "#8F8418",
    950: "#7A6E14"
  };
  const tertiaryColor = {
    25: "#FFFBF5",
    50: "#FFF5E8",
    100: "#FEEBD1",
    200: "#FDD8A3",
    300: "#FDC475",
    400: "#FCB147",
    500: "#FB9D19",
    600: "#C97E14",
    700: "#975E0F",
    800: "#643F0A",
    900: "#321F05",
    950: "#191003"
  };
  const errorColor = {
    25: "#FFFBFA",
    50: "#FEF3F2",
    100: "#FEE4E2",
    200: "#FECDCA",
    300: "#FDA29B",
    400: "#F97066",
    500: "#F04438",
    600: "#D92D20",
    700: "#B42318",
    800: "#912018",
    900: "#7A271A",
    950: "#55160C"
  };
  const warningColor = {
    25: "#FFFCF5",
    50: "#FFFAEB",
    100: "#FEF0C7",
    200: "#FEDF89",
    300: "#FEC84B",
    400: "#FDB022",
    500: "#F79009",
    600: "#DC6803",
    700: "#B54708",
    800: "#93370D",
    900: "#7A2E0E",
    950: "#4E1D09"
  };
  const successColor = {
    25: "#F6FEF9",
    50: "#ECFDF3",
    100: "#DCFAE6",
    200: "#ABEFC6",
    300: "#75E0A7",
    400: "#47CD89",
    500: "#17B26A",
    600: "#079455",
    700: "#067647",
    800: "#085D3A",
    900: "#074D31",
    950: "#053321"
  };
  const grayColor = {
    25: "#FCFCFD",
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
    950: "#0C111D",
    A100: "#0C111D"
  };
  const greyColor = {
    25: "#FCFCFD",
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
    950: "#0C111D",
    A100: "#0C111D"
  };

  return {
    customColors: {
      main: greyColor[500],
      tableHeaderBg: greyColor[50]
    },
    common: {
      black: blackColor,
      white: whiteColor
    },
    primary: {
      ...primaryColor,
      light: primaryColor[300],
      main: primaryColor[500],
      dark: primaryColor[700],
      contrastText: whiteColor
    },
    secondary: {
      ...secondaryColor,
      light: secondaryColor[300],
      main: secondaryColor[500],
      dark: secondaryColor[700],
      contrastText: whiteColor
    },
    tertiary: {
      ...tertiaryColor,
      light: tertiaryColor[300],
      main: tertiaryColor[500],
      dark: tertiaryColor[700],
      contrastText: whiteColor
    },
    error: {
      ...errorColor,
      light: errorColor[300],
      main: errorColor[500],
      dark: errorColor[700],
      contrastText: whiteColor
    },
    warning: {
      ...warningColor,
      light: warningColor[300],
      main: warningColor[500],
      dark: warningColor[700],
      contrastText: whiteColor
    },
    info: {
      light: "#1FD5EB",
      main: "#00CFE8",
      dark: "#00B6CC",
      contrastText: whiteColor
    },
    success: {
      ...successColor,
      light: successColor[300],
      main: successColor[500],
      dark: successColor[700],
      contrastText: whiteColor
    },
    gray: {
      ...grayColor,
      light: grayColor[300],
      main: grayColor[500],
      dark: grayColor[700],
      contrastText: whiteColor
    },
    grey: {
      ...greyColor,
      light: greyColor[200],
      main: greyColor[700],
      dark: greyColor[700],
      A100: "#F2F4F7",
      A200: "#EAECF0",
      A400: "#98A2B3",
      A700: "#344054"
    },
    text: {
      primary: greyColor[500],
      secondary: greyColor[400],
      disabled: hexToRGBA(greyColor[500], 0.42)
    },
    divider: greyColor[300],
    background: {
      paper: whiteColor,
      default: whiteColor
    },
    action: {
      active: hexToRGBA(greyColor[600], 0.54),
      hover: hexToRGBA(greyColor[600], 0.04),
      selected: hexToRGBA(greyColor[600], 0.06),
      selectedOpacity: 0.06,
      disabled: hexToRGBA(greyColor[600], 0.26),
      disabledBackground: hexToRGBA(greyColor[600], 0.12),
      focus: hexToRGBA(greyColor[600], 0.12)
    }
  } as unknown as Palette;
};

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export default DefaultPalette;
