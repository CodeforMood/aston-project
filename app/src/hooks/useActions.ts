import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as MoviesActionCreators from  '../store/actions/movies-actions'
import * as AuthActionCreators from  '../store/actions/auth-actions'
import * as AddToFavouritesActionCreators from  '../store/actions/favourites-actions'
import * as HistoryActionCreators from  '../store/actions/history-actions'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(MoviesActionCreators, dispatch)
}

export const useAuthActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AuthActionCreators, dispatch)
}

export const useAddFavouriteActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AddToFavouritesActionCreators, dispatch)
} 

export const useHistoryActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(HistoryActionCreators, dispatch)
}