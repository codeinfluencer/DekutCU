import { store } from "../../data/database";
const initialState = store.coreValues;

export default function coreValuesReducer(state = initialState, action) {
  switch (action.type) {
    case "STH":
      return [...state];
    case "ANOTHER":
      return [...state];
    default:
      return [...state];
  }
}
