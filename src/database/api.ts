import { _active, state } from "../config";

export function getData() {
  let selected = _active.getActiveRange();
  let newRange = _active.getRange(selected?.getRow()!, 1, selected?.getNumRows()!, _active.getLastColumn());

  let headers = _active.getRange(1, 1, 2, _active.getLastColumn()).getValues();
  let values = newRange.getValues();
  let newValues: any[][] = [];

  for (let i = 0; i < Math.ceil(values.length / 1e4); i++) {
    (async () => {
      let payload = values.slice(i * 1e4, (i + 1) * 1e4);

      let result: any[][] = JSON.parse(
        UrlFetchApp.fetch("https://edsail.com/api/sheets/get", {
          method: "post",
          payload: JSON.stringify(headers.concat(payload))
        }).getContentText()
      );
      newValues.splice(i * 1e4, 1e4, ...result.slice(2));
    })();
  }

  newRange.setValues(newValues);
}

export function postData() {
  let selected = _active.getActiveRange();
  let newRange = _active.getRange(selected?.getRow()!, 1, selected?.getNumRows()!, _active.getLastColumn());

  let headers = _active.getRange(1, 1, 2, _active.getLastColumn()).getValues();
  let values = newRange.getValues();

  for (let i = 0; i < Math.ceil(values.length / 1e4); i++) {
    (async () => {
      let payload = values.slice(i * 1e4, (i + 1) * 1e4);

      UrlFetchApp.fetch("https://edsail.com/api/sheets/update", {
        method: "post",
        headers: {
          Authorization: "Bearer " + state.token
        },
        payload: JSON.stringify(headers.concat(payload))
      });
    })();
  }
}
