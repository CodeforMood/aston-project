import { CurrentUserInfo } from "./currentUserInfo";

export interface AuthState {
  authStatus: string,
  currentUser: string

};
  
export enum authActionTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  SIGN_UP = "SIGN_UP"
};

export enum AuthStatus {
  NO_AUTH = "NO_AUTH",
  AUTH = "AUTH"
}
  
interface SignInAction {
  type: authActionTypes.SIGN_IN,
  payload: string,
};
  
interface SignOutAction {
  type: authActionTypes.SIGN_OUT,
};
  
interface SignUpAction {
  type: authActionTypes.SIGN_UP,
  payload: string,
};

export type AuthAction = SignInAction | SignOutAction | SignUpAction;
