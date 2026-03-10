import { mapRange } from "../../utils/mapRange";

export function textTrim() {
  mapRange((cell) => {
    if (typeof cell !== "string") return cell;
    return cell.trim();
  });
}
