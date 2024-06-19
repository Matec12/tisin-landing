import { NavLink, NavGroup, NavItemsType } from "@/layouts/types";
import MobileNavLink from "./mobile-nav-link";

interface Props {
  handleToggleMobileNav?: () => void;
  sidebarNavItems?: NavItemsType;
}

const resolveNavItemComponent = () => {
  return MobileNavLink;
};

const MobileNavItems = (props: Props) => {
  const { sidebarNavItems } = props;

  const RenderMenuItems = sidebarNavItems?.map(
    (item: NavGroup | NavLink, index: number) => {
      const TagName: any = resolveNavItemComponent();

      return <TagName {...props} key={index} item={item} />;
    }
  );

  return <>{RenderMenuItems}</>;
};

export default MobileNavItems;
