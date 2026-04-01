import { editSubMenu } from "./edit";
import { filterSubMenu } from "./filter";
import { formatSubMenu } from "./format";

export * from "./edit";
export * from "./filter";
export * from "./format";

export function scriptsMenu(
  menu: GoogleAppsScript.Base.Menu,
  ui: GoogleAppsScript.Base.Ui
): GoogleAppsScript.Base.Menu {
  editSubMenu(menu, ui);
  filterSubMenu(menu, ui);
  formatSubMenu(menu, ui);
  return menu;
}
