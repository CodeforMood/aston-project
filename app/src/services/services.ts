import { Movie } from "../types/movies";

export function signUp(login: string, password: string) {
  console.log(localStorage.getItem(login))
  if(localStorage.getItem(login)) {
    throw new Error("Пользователь с таким именем уже есть");
  }
  localStorage.setItem(
    login, 
    JSON.stringify({password,
        favourites: [],
        history: [],
      }),
  )

  localStorage.setItem("currentUser", login)
}

export function signIn(login: string, password: string) {
  if(localStorage.getItem(login) === null) {
    throw new Error("Неправильный логин")
  }

  const passwordFromLS = JSON.parse(localStorage.getItem(login) ?? '')?.password;

  if(passwordFromLS === password) {
    localStorage.setItem("currentUser", login);
  } else {
    throw new Error("Неправильный пароль");
  }
}

export function getCurrentUserLogin () {
  return localStorage.getItem("currentUser");
};

export function getUserInfo (currentUser: string ) {
  const userInfo = JSON.parse(localStorage.getItem(currentUser) ?? `{password: '', history: [], favourites: [],}`);
  return userInfo 
};

export function signOut () {
  localStorage.setItem("currentUser", "");
}

export function setFavoritesMoviesInLS(movie: Movie) {
  const currentUser = getCurrentUserLogin();

  if(currentUser) {
    const userInfo = getUserInfo(currentUser);
    localStorage.setItem(currentUser, JSON.stringify({...userInfo, favourites:[...userInfo.favourites, movie]}))
  }
}

export function deleteFavoritesMoviesInLS(id: string) {
  const currentUser = getCurrentUserLogin();

  if(currentUser) {
    const userInfo = getUserInfo(currentUser);
    localStorage.setItem(currentUser, JSON.stringify({...userInfo, favourites:[...userInfo.favourites.filter((item: Movie) => item["#IMDB_ID"] !== id.toString())]}))
  }
}
