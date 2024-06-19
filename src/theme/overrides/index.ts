import { Theme } from "@mui/material/styles";
import { ComponentsPropsList } from "@mui/material";

export type OwnerStateThemeType = {
  theme: Theme;
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] &
    Record<string, unknown>;
};

import MuiAlerts from "./alerts";
import MuiInput from "./input";
import MuiList from "./list";
import MuiLink from "./link";
import MuiButton from "./button";
import MuiIconButton from "./icon-button";
import MuiAvatar from "./avatars";
import MuiBadge from "./badge";
import MuiChip from "./chip";
import MuiCheckbox from "./checkbox";
import MuiRadio from "./radio";
import MuiDivider from "./divider";
import MuiDialog from "./dialog";
import MuiPaper from "./paper";
import MuiRating from "./rating";
import MuiDrawer from "./drawer";
import MuiAccordion from "./accordion";
import MuiAutocomplete from "./autocomplete";
import MuiSelect from "./select";
import MuiMenu from "./menu";
import MuiPopover from "./popover";
import MuiCard from "./card";
import MuiTypography from "./typography";
import MuiPagination from "./pagination";
import MuiProgress from "./progress";
import MuiDataGrid from "./dataGrid";
import MuiTable from "./table";
import MuiToggleButton from "./toggleButton";

const Overrides = () => {
  const avatars = MuiAvatar();
  const list = MuiList();
  const input = MuiInput();
  const alerts = MuiAlerts();
  const divider = MuiDivider();
  const dialog = MuiDialog();
  const drawer = MuiDrawer();
  const button = MuiButton();
  const chip = MuiChip();
  const checkbox = MuiCheckbox();
  const radio = MuiRadio();
  const accordion = MuiAccordion();
  const autocomplete = MuiAutocomplete();
  const menu = MuiMenu();
  const popover = MuiPopover();
  const cards = MuiCard();
  const rating = MuiRating();
  const pagination = MuiPagination();
  const progress = MuiProgress();
  const dataGrid = MuiDataGrid();
  const tables = MuiTable();

  return Object.assign(
    avatars,
    input,
    list,
    dialog,
    alerts,
    drawer,
    button,
    MuiBadge,
    rating,
    chip,
    checkbox,
    radio,
    accordion,
    autocomplete,
    divider,
    MuiLink,
    cards,
    MuiPaper,
    MuiSelect,
    menu,
    popover,
    MuiIconButton,
    MuiTypography,
    pagination,
    progress,
    dataGrid,
    tables,
    MuiToggleButton
  );
};

export default Overrides;
