import { _active } from "../config";

const keyMap = {
  Target: "Domain",
  "Authority Score": "AS",
  Visits: "Visits",
  "Domain Rating": "DR",
  "Organic / Traffic": "Traffic_A"
} as { [key: string]: string };

export function parseCSV(csv: string[][]): string[][] {
  if (!csv) return [];
  csv = csv.map((el) => el[0].split(","));

  const keys = csv[0].reduce(
    (acc, el, i) => {
      let key = keyMap[el];
      if (!key) return acc;
      acc[key] = i;
      return acc;
    },
    {} as { [key: string]: number }
  );
  let res = [Object.keys(keys)];

  for (let i = 1; i < csv.length; i++) {
    if (!res[i]) res[i] = [];
    for (let j = 0; j < res[0].length; j++) {
      res[i][j] = csv[i][keys[res[0][j]]];
    }
  }
  return res;
}
