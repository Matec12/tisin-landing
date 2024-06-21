import { IconProps } from "@iconify/react";
import { PaletteMode } from "@mui/material";

export type Mode = PaletteMode;

export type AppBar = "fixed" | "static" | "hidden";

export type DesktopNavToggle = "hover" | "click";

export type MobileNavToggle = "accordion" | "collapse";

export type NavGroup = {
  icon?: IconProps["icon"];
  title: string;
  children?: (NavGroup | NavLink)[];
};

export type NavLink = {
  icon?: IconProps["icon"];
  path?: string;
  title: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export type NavItemsType = (NavLink | NavGroup)[];
