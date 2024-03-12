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
  wrongPassword = 'Неправильный логин',
  alreadyEstablished = 'Пользователь с таким именем уже есть'
}

export const fetchError: string = 'Ошибка при загрузке данных! ';

export const apiDomain = 'https://search.imdbot.workers.dev/'