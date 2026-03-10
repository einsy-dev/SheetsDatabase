export { filterRows } from "./filterRows";
export { filterCols } from "./filterCols";

export function filterMenu(ui: GoogleAppsScript.Base.Ui) {
  return ui.createMenu("Filter").addItem("filterRows", "filterRows").addItem("filterCols", "filterCols");
}
