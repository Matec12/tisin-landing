"use client";

import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from "@mui/material/styles";
import { themeConfig } from "@/configs/theme";
import themeOptions from "./ThemeOptions";
import GlobalStyling from "./globalStyles";

interface Props {
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { children } = props;

  let theme = createTheme(themeOptions());
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
