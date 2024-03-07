import { AuthAction, AuthState, authActionTypes, AuthStatus } from "../../types/auth";

const initialState: AuthState = {
  currentUser:'',
  authStatus: AuthStatus.NO_AUTH,
};

export const authReducer = (state = initialState, action: AuthAction): any => {
  // console.log(state);
  switch (action.type) {
    case authActionTypes.SIGN_IN:
      return { ...state, currentUser: action.payload, authStatus: AuthStatus.AUTH }
    case authActionTypes.SIGN_UP:
      return { ...state, currentUser: action.payload, authStatus: AuthStatus.AUTH }
    case authActionTypes.SIGN_OUT:
      return { ...state, currentUser:"", authStatus: AuthStatus.NO_AUTH}
    default:
      return state
  }
};