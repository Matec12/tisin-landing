import { Breakpoint, Breakpoints, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useResponsive = (
  query: keyof Breakpoints,
  key: Breakpoint,
  start?: Breakpoint,
  end?: Breakpoint
): boolean => {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start as Breakpoint, end as Breakpoint)
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  if (query === "only") {
    return mediaOnly;
  }

  return false;
};
