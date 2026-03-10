export { changeOrientation } from "./changeOrientation";
export { insertColumns } from "./insertCols";
export { insertRows } from "./insertRows";

export function editMenu(ui: GoogleAppsScript.Base.Ui) {
  return ui
    .createMenu("Edit")
    .addItem("changeOrientation", "changeOrientation")
    .addItem("insertColumns", "insertColumns")
    .addItem("insertRows", "insertRows");
}
