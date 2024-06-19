import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { CustomDrawerProps } from "./types";
import Icon from "@/components/icon";

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(8, 6),
  justifyContent: "space-between"
}));

const CustomDrawer = (props: CustomDrawerProps) => {
  const {
    open,
    anchor = "right",
    handleClose,
    title,
    children,
    PaperProps,
    width = 500
  } = props;

  return (
    <Drawer
      open={open}
      anchor={anchor}
      variant="temporary"
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{ sx: { width: { xs: "100%", sm: width } }, ...PaperProps }}
    >
      <Header>
        <Typography variant="displayXs" fontWeight="medium" color="grey.800">
          {title}
        </Typography>
        <Button
          size="small"
          variant="text"
          color="grey"
          onClick={handleClose}
          startIcon={<Icon icon="tabler:x-close" />}
        >
          Close
        </Button>
      </Header>
      <Box sx={{ height: "100%" }}>{children}</Box>
    </Drawer>
  );
};

export default CustomDrawer;
