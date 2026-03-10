export { linkFormat } from "./linkFormat";

export function linkMenu(ui: GoogleAppsScript.Base.Ui) {
  return ui.createMenu("Link").addItem("linkFormat", "linkFormat");
}
