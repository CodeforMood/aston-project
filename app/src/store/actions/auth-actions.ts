import { Dispatch } from "redux"
import { AuthAction, authActionTypes } from "../../types/auth";
import { getCurrentUserLogin, getUserInfo, signInLS, signOutLS, signUpLS } from "../../services/services";
import {  toast } from "react-toastify";
import { favouritesActions } from "../../types/favourites";
import { historyActions } from "../../types/history";
import { loadFavouritesAction } from "./favourites-actions";
import { loadHistoryAction } from "./history-actions";


const signIn = (login: string): AuthAction => ({type: authActionTypes.SIGN_IN, payload: login});
const signUp = (login: string): AuthAction => ({type: authActionTypes.SIGN_IN, payload: login});
const signOut = (): AuthAction => ({type: authActionTypes.SIGN_OUT});

export const signInAction = (login: string, password: string) => {
  return (dispatch: Dispatch<AuthAction | favouritesActions | historyActions>) => {
    try {
      signInLS(login, password);
      dispatch(signIn(login));

      const userInfo = getUserInfo(login);

      dispatch(loadFavouritesAction(userInfo.favourites));
      dispatch(loadHistoryAction(userInfo.history));

    } catch (error:any) {
      toast.warn(error.message)
    }
  }
}

export const signUpAction = (login: string, password: string) => {
  return (dispatch: Dispatch<AuthAction>) => {
    try {
      signUpLS(login, password);
      dispatch(signUp(login))

    } catch (error:any) {
      toast.warn(error.message)
    }
  }
}

export const signOutAction = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    signOutLS();
    dispatch(signOut())
  }
}

export const checkAuthAction = () => {
  return (dispatch: Dispatch<AuthAction | favouritesActions | historyActions>) => {
    const currentUser = getCurrentUserLogin()
    if(currentUser) {
      dispatch(signIn(currentUser))

      const userInfo = getUserInfo(currentUser);

      dispatch(loadFavouritesAction(userInfo.favourites));
      dispatch(loadHistoryAction(userInfo.history));
    }   
  }
}
