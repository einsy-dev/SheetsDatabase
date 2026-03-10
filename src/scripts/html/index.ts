export { removeImg } from "./removeImg";

export function htmlMenu(ui: GoogleAppsScript.Base.Ui) {
  return ui.createMenu("Html").addItem("removeImg", "removeImg");
}
