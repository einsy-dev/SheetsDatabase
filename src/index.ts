import * as scripts from "./scripts";
import { scriptsMenu } from "./scripts";
import * as database from "./database";
import { databaseMenu } from "./database";
import { clearToken } from "./config/auth";

function onOpen() {
  let ui = SpreadsheetApp.getUi();
  let scripts = ui.createMenu("Scripts");
  let database = ui.createMenu("Database");

  scriptsMenu(scripts, ui).addToUi();
  databaseMenu(database, ui).addToUi();
}

(globalThis as any) = {
  ...globalThis,
  ...scripts,
  ...database,
  clearToken
};
