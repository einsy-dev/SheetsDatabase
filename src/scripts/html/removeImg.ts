import { mapRange } from "../../utils/mapRange";

export function removeImg() {
  mapRange((cell) => {
    return String(cell).replace(/<img[^>]*>/g, "");
  });
}
