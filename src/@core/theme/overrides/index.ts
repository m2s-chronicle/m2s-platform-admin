import { Theme } from '@mui/material/styles';

//* Overrides Imports
import MuiCard from './card';
import MuiInput from './input';
import MuiButton from './button';
import MuiTypography from './typography';
import MuiLink from './link';
import MuiBackdrop from './backdrop';
import MuiMenu from './menu';
import MuiTabs from './tabs';
import MuiList from './list';
import MuiDivider from './divider';
import MuiTable from './table';
import MuiAlerts from './alerts';
import MuiSelect from './select';
import MuiTooltip from './tooltip';
import MuiDialog from './dialog';
import MuiPagination from './pagination';
import MuiSnackbar from './snackbar';
import MuiChip from './chip';
import MuiToggleButton from './toggleButton';

const Overrides = (theme: Theme) => {
  const cards = MuiCard(theme);
  const input = MuiInput(theme);
  const button = MuiButton(theme);
  const typography = MuiTypography(theme);
  const backdrop = MuiBackdrop(theme);
  const menu = MuiMenu(theme);
  const tabs = MuiTabs(theme);
  const list = MuiList(theme);
  const divider = MuiDivider(theme);
  const table = MuiTable(theme);
  const alerts = MuiAlerts(theme);
  const tooltip = MuiTooltip(theme);
  const dialog = MuiDialog(theme);
  const pagination = MuiPagination(theme);
  const snackbar = MuiSnackbar(theme);
  const chip = MuiChip(theme);

  return Object.assign(
    cards,
    input,
    button,
    typography,
    MuiLink,
    backdrop,
    menu,
    tabs,
    list,
    divider,
    table,
    alerts,
    MuiSelect,
    tooltip,
    dialog,
    pagination,
    snackbar,
    chip,
    MuiToggleButton
  );
};

export default Overrides;
