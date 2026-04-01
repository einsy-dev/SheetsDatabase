import { getToken } from "./auth";

export const _active = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
export const _sites = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("_sites");

export var state: { token: string | null } = { token: getToken() };
