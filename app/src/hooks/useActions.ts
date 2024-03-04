import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as MoviesActionCreators from  '../store/action-creators/movies'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(MoviesActionCreators, dispatch)
}