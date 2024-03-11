import { Dispatch } from "redux";
import { dateHistoryType, historyActionTypes, historyActions } from "../../types/history"
import { clearHistoryInLS, setHistoryInLS } from "../../services/services";

export const addHistoryAction = (name: string, time: string) => {
  return (dispatch: Dispatch<historyActions>) => {
    setHistoryInLS({name, time})
    dispatch({ type: historyActionTypes.ADD_HISTORY, payload: { name, time }});
  }
}

export const clearHistoryAction = () => {
  return (dispatch: Dispatch<historyActions>) => {
    clearHistoryInLS();
    dispatch({ type: historyActionTypes.CLEAR_HISTORY});
  }
}

export const loadHistoryAction = (history: dateHistoryType) => ({
  type: historyActionTypes.LOAD_HISTORY,
  payload: history
});