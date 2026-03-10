import * as scripts from "./scripts";
import { editMenu, filterMenu, formatMenu, htmlMenu, linkMenu } from "./scripts";

function onOpen() {
  let ui = SpreadsheetApp.getUi();
  let scripts = ui.createMenu("Scripts");
  let seo = ui.createMenu("Seo");

  scripts
    .addSubMenu(editMenu(ui))
    .addSubMenu(filterMenu(ui))
    .addSubMenu(formatMenu(ui))
    .addSubMenu(htmlMenu(ui))
    .addSubMenu(linkMenu(ui))
    .addToUi();
}

(globalThis as any) = {
  ...globalThis,
  ...scripts
};
