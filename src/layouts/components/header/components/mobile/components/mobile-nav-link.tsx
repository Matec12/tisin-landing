import { ElementType } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { NavLink } from "@/layouts/types";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  ListItemButtonProps
} from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Icon from "@/components/icon";
import { hexToRGBA } from "@/libs/hex-to-rgba";
import { handleURLQueries } from "@/layouts/utils";

const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & {
    component?: ElementType;
    to: string;
    target?: "_blank" | undefined;
  }
>(({ theme }) => ({
  width: "100%",
  marginLeft: theme.spacing(3.5),
  marginRight: theme.spacing(3.5),
  borderRadius: theme.spacing(1),
  transition: "padding-left .25s ease-in-out, padding-right .25s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.action.hover
  },
  "&.active": {
    "&, &:hover": {
      background: `${theme.palette.primary[25]} !important`,
      "&.Mui-focusVisible": {
        background: `linear-gradient(72.47deg, ${
          theme.palette.primary.dark
        } 22.16%, ${hexToRGBA(theme.palette.primary.dark, 0.7)} 76.47%)`
      }
    },
    "& .MuiTypography-root, & svg": {
      color: `${theme.palette.primary.main} !important`,
      fontWeight: 600
    }
  }
}));

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out"
}));

interface MobileNavLinkProps {
  item: NavLink;
  handleToggleMobileNav: () => void;
}

const MobileNavLink = (props: MobileNavLinkProps) => {
  const { item, handleToggleMobileNav } = props;

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
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{ mt: 3, px: "0 !important" }}
    >
      <MenuNavLink
        component={Link}
        {...(item.disabled && { tabIndex: -1 })}
        className={isNavLinkActive() ? "active" : ""}
        to={item.path === undefined ? "/" : `${item.path}`}
        {...(item.openInNewTab ? { target: "_blank" } : null)}
        onClick={(e) => {
          if (item.path === undefined) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (item.path) {
            handleToggleMobileNav();
          }
        }}
        sx={{
          py: 3,
          ...(item.disabled
            ? { pointerEvents: "none" }
            : { cursor: "pointer" }),
          px: 6,
          "& .MuiTypography-root, & svg": {
            color: "grey.800",
            fontWeight: 500
          }
        }}
      >
        <ListItemIcon
          sx={{
            transition: "margin .25s ease-in-out",
            mr: 2,
            ...(parent ? { ml: 1.5, mr: 3.5 } : {}),
            "& svg": {
              fontSize: "0.625rem",
              ...(!parent ? { fontSize: "1.375rem" } : {}),
              ...(parent && item.icon ? { fontSize: "0.875rem" } : {})
            }
          }}
        >
          <Icon icon="tabler:dot" />
        </ListItemIcon>

        <MenuItemTextMetaWrapper
          sx={{
            opacity: 1
          }}
        >
          <Typography noWrap sx={{ fontSize: "14px" }}>
            {item.title}
          </Typography>
        </MenuItemTextMetaWrapper>
      </MenuNavLink>
    </ListItem>
  );
};

export default MobileNavLink;
