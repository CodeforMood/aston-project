import React from 'react';
import { Layout } from 'antd';
import MainPage from '../../pages/main-page/main-page'
import Favourites from '../../pages/favourites/favourites'
import PageNotFound from '../../pages/page-not-found/page-not-found'
import History from '../../pages/history/history';
import { Routes, Route } from 'react-router-dom';
import { HeaderNav } from '../header-nav/header-nav';
import { Provider } from 'react-redux';
import { store } from '../../store';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';

const { Footer } = Layout;

const App: React.FC = () => {

  return (
    <Provider store={store}>
    <Layout style={{ minHeight: '100vh', gap: '20px' }}>
      <HeaderNav />

      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/history" element={<History />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    
      <Footer style={{ textAlign: 'center', background: 'black', color: 'white'}}>
        ©{new Date().getFullYear()}
      </Footer>
    </Layout>
    </Provider>
  );
};

export default App;
