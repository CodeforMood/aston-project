import { Dispatch } from "redux"
import { AuthAction, authActionTypes } from "../../types/auth";
import { getCurrentUserLogin, signIn, signOut, signUp } from "../../services/services";
import {  toast } from "react-toastify";

export const signInAction = (login: string, password: string) => {
  return (dispatch: Dispatch<AuthAction>) => {
    try {
      signIn(login, password);
      dispatch({type: authActionTypes.SIGN_IN, payload: login})

    } catch (error:any) {
      toast.warn(error.message)
    }
  }
}

export const signUpAction = (login: string, password: string) => {
  return (dispatch: Dispatch<AuthAction>) => {
    try {
      signUp(login, password);
      dispatch({type: authActionTypes.SIGN_UP, payload: login})

    } catch (error:any) {
      toast.warn(error.message)
    }
  }
}

export const signOutAction = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    signOut();
    dispatch({type: authActionTypes.SIGN_OUT})
  }
}

export const checkAuthAction = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    const currentUser = getCurrentUserLogin()
    if(currentUser) {
      dispatch({type: authActionTypes.SIGN_IN, payload: currentUser})
    }   
  }
}