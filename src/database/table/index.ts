export { makeHeader } from "./makeHeader";
export { makeTab } from "./makeTab";

export function tableSubMenu(menu: GoogleAppsScript.Base.Menu, ui: GoogleAppsScript.Base.Ui) {
  let table = ui.createMenu("Table");
  table.addItem("Header", "makeHeader");
  table.addItem("New tab", "makeTab");

  menu.addSubMenu(table);
}
