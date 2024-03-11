import { Dispatch } from "redux";
import { historyActionTypes, historyActions } from "../../types/history"
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
