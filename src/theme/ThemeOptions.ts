"use client";

import { deepmerge } from "@mui/utils";
import { ThemeOptions } from "@mui/material";
import palette from "./palette";
import spacing from "./spacing";
import shadows from "./shadows";
import overrides from "./overrides";
import typography from "./typography";
import breakpoints from "./breakpoints";

const themeOptions = (): ThemeOptions => {
  // @ts-ignore
  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      breakpoints: breakpoints(),
      components: overrides(),
      palette: palette(),
      ...spacing,
      shape: {
        borderRadius: 6
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      },
      shadows: shadows(),
      typography
    },
    {}
  );

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: palette().primary
    }
  });
};

export default themeOptions;
