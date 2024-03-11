import { Layout } from 'antd';
import MainPage from '../../pages/main-page/main-page'
import Favourites from '../../pages/favourites/favourites'
import PageNotFound from '../../pages/page-not-found/page-not-found'
import History from '../../pages/history/history';
import { Routes, Route } from 'react-router-dom';
import { HeaderNav } from '../header-nav/header-nav';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ProtectedRoute from '../protected-route/protected-route';
import { AppRoute } from '../../const';
import MovieDetail from '../../pages/movie-detail/movie-detail';

const { Footer } = Layout;

const App: React.FC = () => {
  const { authStatus } = useTypedSelector(state => state.auth);

  const isAuthenticated = (): boolean => {
    return authStatus === 'AUTH' ? true : false
  };

  return (
    <Layout style={{ minHeight: '100vh', gap: '20px' }}>
      <HeaderNav />

      <Routes>
        <Route path="/sign-up" element={authStatus !== 'AUTH' ? <SignUpPage /> : <MainPage />} />
        <Route path="/sign-in" element={authStatus !== 'AUTH' ? <SignInPage /> : <MainPage />} />

        <Route path={AppRoute.Root} element={<MainPage />}/>

        <Route path={AppRoute.Favourites} element={
          <ProtectedRoute
            element={<Favourites />}
            componentName="Favourites"
            loggedIn={isAuthenticated()}
          />}
        />

        <Route path={AppRoute.History} element={
          <ProtectedRoute
            element={<History />}
            componentName="History"
            loggedIn={isAuthenticated()}
          />}
        />

        <Route path={AppRoute.MovieDetail} element={<MovieDetail />}/>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer style={{ textAlign: 'center', background: 'black', color: 'white' }}>
        ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
