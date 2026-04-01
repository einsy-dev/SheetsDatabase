export function makeTab() {
  const template = SpreadsheetApp.openById("1xJCjJfumO9yid9oP1HkMV1SU6frIeDGDY0sVO4fdwJg").getSheetByName("v1.0.0");
  const dest = SpreadsheetApp.getActiveSpreadsheet();
  const res = template?.copyTo(dest);
  res?.activate();
}
