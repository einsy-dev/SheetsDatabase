import * as database from "./database";
import { filterCols } from "./filter/filterCols";
import { filterRows } from "./filter/filterRows";
import { insertColumns } from "./insert/insertCols";
import { insertRows } from "./insert/insertRows";
import { linkFormat } from "./link/linkFormat";
import { rotate } from "./rotate/rotate";
import { textIn } from "./text/textIn";
import { textTrim } from "./text/textTrim";
import { removeImg } from "./text/removeImg";
import { parseDomain } from "./utils/parseDomain";
import { textToNumber } from "./number/textToNumber";

function onOpen() {
  let ui = SpreadsheetApp.getUi();
  let scripts = ui.createMenu("Scripts");
  let database = ui.createMenu("Database");

  let text = ui.createMenu("Text");
  text.addItem("Text trim", "textTrim").addItem("Text in", "textIn").addItem("Remove <img ... >", "removeImg");

  let number = ui.createMenu("Number");
  number.addItem("Text to number", "textToNumber");

  let link = ui.createMenu("Link");
  link.addItem("Domain", "linkFormat");

  let filter = ui.createMenu("Filter");
  filter.addItem("Filter rows", "filterRows");

  let insert = ui.createMenu("Insert");
  insert.addItem("Insert columns", "insertColumns").addItem("Insert rows", "insertRows");

  scripts
    .addItem("Change orientation", "changeOrientation")
    .addItem("Parse CSV", "csv")
    .addSubMenu(text)
    .addSubMenu(number)
    .addSubMenu(link)
    .addSubMenu(insert)
    .addSubMenu(filter)
    .addToUi();

  database
    .addItem("Refresh", "refreshRange")
    .addItem("Refresh all", "refresh")
    .addItem("Save", "updatePreserveRange")
    .addItem("Overwrite", "updateRange")
    .addItem("Reset", "resetRange")
    .addToUi();

  // if (!ScriptApp.getProjectTriggers().some((t) => t.getHandlerFunction() == "editTrigger")) {
  //   ScriptApp.newTrigger("editTrigger").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onEdit().create();
  //   console.log("trigger added");
  // }
}

(globalThis as any) = {
  ...globalThis,
  parseDomain,
  textIn,
  textTrim,
  textToNumber,
  removeImg,
  linkFormat,
  rotate,
  insertColumns,
  insertRows,
  filterRows,
  filterCols,
  database
};
