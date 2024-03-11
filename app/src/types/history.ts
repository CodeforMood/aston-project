export enum historyActionTypes {
  ADD_HISTORY = "ADD_HISTORY",
  CLEAR_HISTORY = "CLEAR_HISTORY",
  LOAD_HISTORY = "LOAD_HISTORY"
}

export type dateHistoryType = {
  name: string,
  time: string
}

export type historyStateType = {
  history: dateHistoryType[]
}

export interface addhistoryInterface {
  type: historyActionTypes.ADD_HISTORY,
  payload: dateHistoryType
}
export interface clearhistoryInterface {
  type: historyActionTypes.CLEAR_HISTORY
}

export interface loadHistoryInterface {
  type: historyActionTypes.LOAD_HISTORY,
  payload: dateHistoryType[]
}

export type historyActions = addhistoryInterface | clearhistoryInterface | loadHistoryInterface;
