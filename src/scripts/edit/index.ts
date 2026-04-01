export { changeOrientation } from "./changeOrientation";
export { insertColumns } from "./insertCols";
export { insertRows } from "./insertRows";

export function editSubMenu(menu: GoogleAppsScript.Base.Menu, ui: GoogleAppsScript.Base.Ui) {
  let subMenu = ui
    .createMenu("Edit")
    .addItem("Rotate", "changeOrientation")
    .addItem("Insert columns", "insertColumns")
    .addItem("Insert rows", "insertRows");

  menu.addSubMenu(subMenu);
}

// export function removeImg() {
//   mapRange((cell) => {
//     return String(cell).replace(/<img[^>]*>/g, "");
//   });
// }
