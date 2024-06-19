import {
  Mode,
  AppBar,
  DesktopNavToggle,
  MobileNavToggle
} from "@/layouts/types";

type ThemeConfig = {
  mode: Mode;
  appBar: AppBar;
  appBarBlur: boolean;
  menuTextTruncate: boolean;
  menuAnimation: boolean;
  desktopNavToggle: DesktopNavToggle;
  mobileNavToggle: MobileNavToggle;
  mobileNavOpen: boolean;
  responsiveFontSizes: boolean;
};

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  mode: "light" /* light | dark */,

  // ** Navigation (Menu) Configs
  menuAnimation: true /* true | false */,
  menuTextTruncate: false /* true | false */,
  desktopNavToggle: "hover" /* click | hover */,
  mobileNavToggle: "accordion" /* accordion | collapse */,
  mobileNavOpen: false /* true | false */,

  // ** AppBar Configs
  appBar: "fixed" /* fixed | static | hidden */,
  appBarBlur: true /* true | false */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */
};

export { themeConfig };
