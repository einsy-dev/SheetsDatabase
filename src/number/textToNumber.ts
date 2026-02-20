export function textToNumber() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getActiveRange();
  if (!range) return;
  const selected = range.getValues();

  for (let i = 0; i < selected.length; i++) {
    for (let j = 0; j < selected[i].length; j++) {
      let cell = String(selected[i][j]);
      let multiplier = 1;
      if (cell.includes("K")) {
        multiplier *= 1000;
        cell = cell.replace("K", "");
      }
      if (cell.includes("M")) {
        multiplier *= 1e6;
        cell = cell.replace("M", "");
      }
      if (cell.includes("B")) {
        multiplier *= 1e9;
        cell = cell.replace("B", "");
      }

      selected[i][j] = +cell * multiplier;
    }
  }
  range.setValues(selected);
}
