import { mapRange } from "../../utils/mapRange";

export function textToNumber() {
  mapRange((cell) => {
    if (cell == "" || isNaN(+cell)) return cell;

    let multiplier = 1;
    if (cell.match(/[KkЛл]/)) {
      multiplier *= 1e3;
      cell = cell.replace(/[KkЛл]/, "");
    }
    if (cell.match(/[MmЬь]/)) {
      multiplier *= 1e6;
      cell = cell.replace(/[MmЬь]/, "");
    }
    if (cell.match(/[BbИи]/)) {
      multiplier *= 1e9;
      cell = cell.replace(/[BbИи]/, "");
    }

    return +cell * multiplier;
  });
}
