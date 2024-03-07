import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as MoviesActionCreators from  '../store/action-creators/movies'
import * as AuthActionCreator from  '../store/action-creators/auth-actions'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(MoviesActionCreators, dispatch)
}

export const useAuthActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AuthActionCreator, dispatch)
}