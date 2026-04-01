import { _active } from "../../config";

export function makeHeader() {
  let res: string[][] = JSON.parse(UrlFetchApp.fetch("https://edsail.com/api/sheets/table/header").getContentText());
  let newRange = _active.getRange(1, 1, res.length, res[0].length);
  newRange.setValues(res);
  let merge = [];
  for (let i = 0; i < res[0].length; i++) {
    if (res[0][i] != "") {
      merge.push(i);
    }
  }
  let colorMap: { [key: string]: { [key: string]: string } } = {
    Ahrefs: { bg: "#FF8800", text: "#000" },
    Semrush: { bg: "#f4f5f9", text: "#000" },
    Majestic: { bg: "#1c3b51", text: "#fff" }
  };
  for (let i = 0; i < merge.length; i++) {
    let r = _active.getRange(1, merge[i] + 1, 1, merge[i + 1] - merge[i] || res[0].length - merge[i]);
    let key = res[0][merge[i]];
    console.log(key);
    r.setHorizontalAlignment("center")
      .setFontWeight("bold")
      .setVerticalAlignment("middle")
      .setFontSize(12)
      .setBackground(colorMap[key]?.bg || "#fff")
      .setFontColor(colorMap[key]?.text || "#000");
    r.merge();
  }
  let r2 = _active.getRange(2, 1, 1, res[1].length);
  r2.setHorizontalAlignment("center")
    .setFontWeight("bold")
    .setVerticalAlignment("middle")
    .setFontSize(12)
    .setBackground("#cbcbcb")
    .setFontColor("#000");
}
