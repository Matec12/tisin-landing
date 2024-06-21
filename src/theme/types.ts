declare module "@mui/material/styles" {
  interface PaletteColor {
    15: string;
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  }
  interface SimplePaletteColorOptions {
    15?: string;
    25?: string;
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }
  interface Palette {
    gray: PaletteColor;
    tertiary: PaletteColor;
    customColors: {
      dark: string;
      main: string;
      light: string;
      bodyBg: string;
      trackBg: string;
      avatarBg: string;
      darkPaperBg: string;
      lightPaperBg: string;
      tableHeaderBg: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      trackBg?: string;
      avatarBg?: string;
      darkPaperBg?: string;
      lightPaperBg?: string;
      tableHeaderBg?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xs: true;
    xl: true;
    "2xl": true;
  }

  interface ButtonPropsColorOverrides {
    tertiary: true;
    gray: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsSizeOverrides {
    xs: true;
    xl: true;
    "2xl": true;
  }

  interface ButtonPropsColorOverrides {
    grey: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    xs: true;
    xl: true;
    "2xl": true;
  }

  interface ChipPropsColorOverrides {
    tertiary: true;
    grey: true;
  }
}

declare module "@mui/material/Typography" {
  interface Typography {
    display2xl: true;
    displayXl: true;
    displayLg: true;
    displayMd: true;
    displaySm: true;
    displayXs: true;
    text2xl: true;
    textXl: true;
    textLg: true;
    textMd: true;
    textSm: true;
    textXs: true;
  }
  interface TypographyPropsVariantOverrides {
    display2xl: true;
    displayXl: true;
    displayLg: true;
    displayMd: true;
    displaySm: true;
    displayXs: true;
    text2xl: true;
    textXl: true;
    textLg: true;
    textMd: true;
    textSm: true;
    textXs: true;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    primary: true;
  }
}

export {};
