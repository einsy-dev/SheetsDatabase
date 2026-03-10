import { mapRange } from "../../utils/mapRange";

export function textIn() {
  let quote = SpreadsheetApp.getUi().prompt("*text*").getResponseText();

  mapRange((cell) => {
    return quote + cell + quote;
  });
}
