import { _active } from "../../config";
import { mapRange } from "../../utils/mapRange";
import { parseDomain } from "../../utils/parseDomain";

export function linkFormat() {
  mapRange((cell) => {
    return parseDomain(cell) || "";
  });
}
