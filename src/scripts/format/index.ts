export { textIn } from "./textIn";
export { textTrim } from "./textTrim";
export { textToNumber } from "./textToNumber";

export function formatMenu(ui: GoogleAppsScript.Base.Ui) {
  return ui
    .createMenu("Format")
    .addItem("textIn", "textIn")
    .addItem("textTrim", "textTrim")
    .addItem("textToNumber", "textToNumber");
}
