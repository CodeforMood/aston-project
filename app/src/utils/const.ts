export enum AppRoute {
  Root = '/',
  SignUp = '/sign-up',
  History = '/history',
  Favourites = '/favourites',
  SignIn = '/sign-in',
  MovieDetail = '/details/:id'
};

export enum validationFormik {
  requiredEmail = 'Поле email обязательное!',
  requiredPassword = 'Поле password обязательное!',
  minSymbol = 'Поле должно быть больше 8 символов!'
};

export enum validationSignInAndSignUp {
  wrongPswdOrLgn = 'Неправильный логин или пароль',
  alreadyEstablished = 'Пользователь с таким именем уже есть'
}

export enum PageName {
  SignUp = 'SignUp',
  SignIn = 'SignIn'
}
export const fetchError: string = 'Ошибка при загрузке данных! ';

export const apiDomain = 'https://search.imdbot.workers.dev/'