export function mapRange(callback: (cell: any) => any, range?: GoogleAppsScript.Spreadsheet.Range) {
  let r = range || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveRange();
  if (!r) return;
  let v = r.getValues();

  for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v[i].length; j++) {
      v[i][j] = callback(v[i][j]);
    }
  }

  r.setValues(v);
}
