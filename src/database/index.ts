import { state } from "../config";
export * from "./table";
import { tableSubMenu } from "./table";
export { getData, postData } from "./api";

export function databaseMenu(
  menu: GoogleAppsScript.Base.Menu,
  ui: GoogleAppsScript.Base.Ui
): GoogleAppsScript.Base.Menu {
  tableSubMenu(menu, ui);

  menu.addItem("Get data", "getData");
  if (state.token) {
    menu.addItem("Send data", "postData");
  }
  menu.addItem("Auth", "setToken");
  return menu;
}
