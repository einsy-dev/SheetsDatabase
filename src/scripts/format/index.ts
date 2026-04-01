export { textIn } from "./textIn";
export { textTrim } from "./textTrim";
export { domain } from "./domain";

export function formatSubMenu(menu: GoogleAppsScript.Base.Menu, ui: GoogleAppsScript.Base.Ui) {
  let subMneu = ui
    .createMenu("Format")

    .addItem(`Text in *t*`, "textIn")
    .addItem("Trim", "textTrim")
    .addItem("Domain", "domain");

  menu.addSubMenu(subMneu);
}
