import { Palette } from "@mui/material";
import { hexToRGBA } from "@/libs/hex-to-rgba";

const DefaultPalette = (): Palette => {
  const whiteColor = "#FFFFFF";
  const blackColor = "#000000";
  const primaryColor = {
    // 15: "#E5F4EC",
    // 25: "#BFEBCE",
    // 50: "#80D5A2",
    // 100: "#59CB84",
    // 200: "#33C267",
    // 300: "#28A856",
    // 400: "#209143",
    // 500: "#0C8346",
    // 600: "#0B763F",
    // 700: "#096834",
    // 800: "#075A2A",
    // 900: "#054D21",
    // 950: "#043F19"
    15: "#E5EDEA",
    25: "#BFCEC9",
    50: "#94ADA5",
    100: "#6F8D84",
    200: "#557B6F",
    300: "#40665B",
    400: "#305249",
    500: "#173C35",
    600: "#153631",
    700: "#12302C",
    800: "#0F2927",
    900: "#0B2120",
    950: "#081B1A"
  };
  const secondaryColor = {
    15: "#FFF7E6",
    25: "#FFEBBF",
    50: "#FFDE99",
    100: "#FFD173",
    200: "#FFC44D",
    300: "#FFB727",
    400: "#FFAB00",
    500: "#E6B73E",
    600: "#BF942F",
    700: "#997020",
    800: "#734D10",
    900: "#4D2900",
    950: "#331B00"
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
