import { _active } from "../config";

export function makeHeader() {
  let data = UrlFetchApp.fetch("https://edsail.com/sheets/header").getContentText();
  let res: string[][] = JSON.parse(data);

  let newRange = _active.getRange(1, 1, res.length, res[0].length);
  newRange.setValues(res);
}
