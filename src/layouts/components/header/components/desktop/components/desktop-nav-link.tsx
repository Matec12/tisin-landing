import { ElementType } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiListItem, { ListItemProps } from "@mui/material/ListItem";
import { themeConfig } from "@/configs/theme";
import { NavLink as NavLinkType } from "@/layouts/types";
import { hexToRGBA } from "@/libs/hex-to-rgba";
import { handleURLQueries } from "@/layouts/utils";

const ListItem = styled(MuiListItem)<
  ListItemProps & {
    component?: ElementType;
    href: string;
    target?: "_blank" | undefined;
  }
>(({ theme }) => ({
  width: "auto",
  padding: theme.spacing(2, 4, 2, 3),
  "&.active .MuiTypography-root, &.active .MuiListItemIcon-root": {
    color: theme.palette.primary.main
  },
  "&.active .MuiTypography-root": {
    fontWeight: 500
  },
  "&:focus-visible": {
    outline: 0,
    backgroundColor: theme.palette.action.focus
  }
}));

interface DesktopNavLinkProps {
  isOffSet: boolean;
  item: NavLinkType;
}

const DesktopNavLink = (props: DesktopNavLinkProps) => {
  const { isOffSet, item } = props;

  const { menuTextTruncate } = themeConfig;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isNavLinkActive = () => {
    if (
      pathname === item.path ||
      handleURLQueries(pathname, searchParams, item.path)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <List component="div" sx={{ py: 2.625 }}>
      <ListItem
        component={Link}
        disabled={item.disabled}
        {...(item.disabled && { tabIndex: -1 })}
        target={item.openInNewTab ? "_blank" : undefined}
        href={item.path === undefined ? "/" : `${item.path}`}
        onClick={(e) => {
          if (item.path === undefined) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        sx={{
          ...(item.disabled
            ? { pointerEvents: "none" }
            : {
                cursor: "pointer",
                "&:hover": {
                  "& .MuiTypography-root": {
                    color: isOffSet ? "primary.main" : "primary.100"
                  }
                }
              }),
          "&.active, &.active:hover": {
            boxShadow: (theme) =>
              `0px 2px 6px ${hexToRGBA(theme.palette.primary.main, 0.48)}`,
            background: (theme) => theme.palette.primary.main,
            "&:focus-visible": {
              background: (theme) => theme.palette.primary.dark
            },
            "& .MuiTypography-root, & .MuiListItemIcon-root": {
              color: "common.white"
            }
          }
        }}
      >
        <Box
          sx={{
            gap: 2,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ...(menuTextTruncate && { overflow: "hidden" })
            }}
          >
            <Typography
              {...(menuTextTruncate && { noWrap: true })}
              variant="textSm"
              sx={{
                color: isNavLinkActive()
                  ? "primary.main"
                  : isOffSet
                    ? "grey.600"
                    : "common.white",
                fontWeight: isNavLinkActive() ? 600 : 500
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Box>
      </ListItem>
    </List>
  );
};

export default DesktopNavLink;
