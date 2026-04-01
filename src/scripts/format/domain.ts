import { mapRange } from "../../utils/mapRange";
import { parseDomain } from "../../utils/parseDomain";

export function domain() {
  mapRange((cell) => {
    return parseDomain(cell) || "";
  });
}
