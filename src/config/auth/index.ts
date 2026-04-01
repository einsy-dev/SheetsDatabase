import { state } from "..";

let userProperties = PropertiesService.getUserProperties();

export function setToken(): string {
  let token = SpreadsheetApp.getUi().prompt("Set token").getResponseText();
  userProperties.setProperty("token", token);
  return token;
}

export function getToken(): string | null {
  return userProperties.getProperty("token");
}

export function clearToken() {
  userProperties.deleteProperty("token");
  state.token = null;
}
