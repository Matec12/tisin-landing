import { DrawerProps } from "@mui/material/Drawer";

export type CustomDrawerProps = DrawerProps & {
  title: string;
  width?: number;
  handleClose: () => void;
};
