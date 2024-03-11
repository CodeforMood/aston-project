import { favouritesActionTypes, favouritesActions, favouritesStateType } from "../../types/favourites"


const favouritesState: favouritesStateType = {
  favourites: []
}

export const favouritesReducer = (state = favouritesState, action: favouritesActions): favouritesStateType => {
  console.log(state)
  switch (action.type) {
    case favouritesActionTypes.ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }
    case favouritesActionTypes.DELETE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(item => item["#IMDB_ID"] !== action.payload.toString())
      }
    default:
      return state
  }
}
