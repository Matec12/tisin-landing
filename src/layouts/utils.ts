import { NavGroup, NavLink } from "@/layouts/types";
import { ReadonlyURLSearchParams } from "next/navigation";

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
export const handleURLQueries = (
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  path: string | undefined
): boolean => {
  const queries = searchParams.toString();
  if (queries.length && path) {
    return (
      pathname.includes(path) &&
      `${pathname}?${queries}`.includes(queries) &&
      path !== "/"
    );
  }

  return false;
};

/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentURL
 */
export const hasActiveChild = (item: NavGroup, currentURL: string): boolean => {
  const { children } = item;

  if (!children) {
    return false;
  }

  for (const child of children) {
    if ((child as NavGroup).children) {
      if (hasActiveChild(child, currentURL)) {
        return true;
      }
    }
    const childPath = (child as NavLink).path;

    // Check if the child has a link and is active
    if (
      child &&
      childPath &&
      currentURL &&
      (childPath === currentURL ||
        (currentURL.includes(childPath) && childPath !== "/"))
    ) {
      return true;
    }
  }

  return false;
};

/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */
export const removeChildren = (
  children: NavLink[],
  openGroup: string[],
  currentActiveGroup: string[]
) => {
  children.forEach((child: NavLink) => {
    if (!currentActiveGroup.includes(child.title)) {
      const index = openGroup.indexOf(child.title);
      if (index > -1) openGroup.splice(index, 1);

      // @ts-ignore
      if (child.children) {
        // @ts-ignore

        return removeChildren(child?.children, openGroup, currentActiveGroup);
      }
    }
  });
};
