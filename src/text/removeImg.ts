export function removeImg() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getActiveRange();
  if (!range) return;
  const selected = range.getValues();

  for (let i = 0; i < selected.length; i++) {
    for (let j = 0; j < selected[i].length; j++) {
      selected[i][j] = String(selected[i][j]).replace(/<img[^>]*>/g, "");
    }
  }
  range.setValues(selected);
}
