import { Dispatch } from "redux";
import { dateHistoryType, historyActionTypes, historyActions } from "../../types/history"
import { clearHistoryInLS, setHistoryInLS } from "../../services/services";

export const loadHistoryAction = (history: dateHistoryType[]): historyActions => ({
  type: historyActionTypes.LOAD_HISTORY,
  payload: history
});

export const addHistory = (history: dateHistoryType): historyActions => ({
  type: historyActionTypes.ADD_HISTORY,
  payload: history
});

export const clearHistory = (): historyActions => ({
  type: historyActionTypes.CLEAR_HISTORY,
});

export const addHistoryAction = (name: string, time: string) => {
  return (dispatch: Dispatch<historyActions>) => {
    setHistoryInLS({name, time})
    dispatch(addHistory({ name, time }));
  }
}

export const clearHistoryAction = () => {
  return (dispatch: Dispatch<historyActions>) => {
    clearHistoryInLS();
    dispatch(clearHistory());
  }
}
