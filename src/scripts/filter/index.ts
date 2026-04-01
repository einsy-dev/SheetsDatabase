export { filterRows } from "./filterRows";
export { filterCols } from "./filterCols";

export function filterSubMenu(menu: GoogleAppsScript.Base.Menu, ui: GoogleAppsScript.Base.Ui) {
  let subMenu = ui.createMenu("Filter").addItem("Rows", "filterRows");
  // .addItem("filterCols", "filterCols");
  menu.addSubMenu(subMenu);
}
