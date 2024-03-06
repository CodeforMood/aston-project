import { Dispatch } from "redux"
import { AuthAction, authActionTypes } from "../../types/auth";
import { getCurrentUserLogin, signIn, signOut, signUp } from "../../services/services";
import {  toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const signInAction = (login: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      signIn(login, password);
      dispatch({type: authActionTypes.SIGN_IN, payload: login})

    } catch (error:any) {
      toast.warn(error)
    }
  }
}

export const signUpAction = (login: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      signUp(login, password);

      dispatch({type: authActionTypes.SIGN_UP, payload: login})
      return redirect("/");

    } catch (error:any) {
      toast.warn(error)
    }
  }
}

export const signOutAction = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    signOut();
    dispatch({type: authActionTypes.SIGN_OUT})
  }
}

export const checkAuthAction = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const currentUser = getCurrentUserLogin()
    if(currentUser) {
      dispatch({type: authActionTypes.SIGN_IN, payload: currentUser})
    }
    
  }
}