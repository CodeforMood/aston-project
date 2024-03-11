import { historyActionTypes, historyActions, historyStateType } from "../../types/history"

const historyState: historyStateType = {
  history: []
}

export const historyReducer = (state = historyState, action: historyActions): historyStateType => {
  switch (action.type) {
    case historyActionTypes.ADD_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload]
      }
    case historyActionTypes.CLEAR_HISTORY:
    return {
      ...state,
      history: []
    }
    default:
      return state
  }
}
