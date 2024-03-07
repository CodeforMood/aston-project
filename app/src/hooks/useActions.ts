import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as MoviesActionCreators from  '../store/actions/movies-actions'
import * as AuthActionCreator from  '../store/actions/auth-actions'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(MoviesActionCreators, dispatch)
}

export const useAuthActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AuthActionCreator, dispatch)
}