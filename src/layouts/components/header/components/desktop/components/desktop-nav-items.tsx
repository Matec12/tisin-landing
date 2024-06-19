import {
  NavLink as NavLinkType,
  NavGroup as NavGroupType,
  NavItemsType,
} from "@/layouts/types";
import DesktopNavLink from "./desktop-nav-link";

interface Props {
  hasParent?: boolean;
  navItems?: NavItemsType;
}
const resolveComponent = () => {
  return DesktopNavLink;
};

const NavItems = (props: Props) => {
  const RenderMenuItems = props.navItems?.map(
    (item: NavGroupType | NavLinkType, index: number) => {
      const TagName: any = resolveComponent();

      return <TagName {...props} key={index} item={item} />;
    }
  );

  return <>{RenderMenuItems}</>;
};

export default NavItems;
