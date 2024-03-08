import { historyActionTypes } from "../../types/history"

export const AddHistoryAction = (name: string, time: string) => ({ type: historyActionTypes.ADD_HISTORY, payload: { name, time }});

export const clearHistoryAction = () => ({ type: historyActionTypes.CLEAR_HISTORY});
