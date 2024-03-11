import { Dispatch } from "redux"
import { AuthAction, authActionTypes } from "../../types/auth";
import { getCurrentUserLogin, getUserInfo, signIn, signOut, signUp } from "../../services/services";
import {  toast } from "react-toastify";
import { favouritesActionTypes, favouritesActions } from "../../types/favourites";
import { historyActionTypes, historyActions } from "../../types/history";

export const signInAction = (login: string, password: string) => {
  return (dispatch: Dispatch<AuthAction | favouritesActions | historyActions>) => {
    try {
      signIn(login, password);
      dispatch({type: authActionTypes.SIGN_IN, payload: login});

      const userInfo = getUserInfo(login);

      dispatch({type: favouritesActionTypes.LOAD_FAVOURITES, payload: userInfo.favourites});
      dispatch({type: historyActionTypes.LOAD_HISTORY, payload: userInfo.history});

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