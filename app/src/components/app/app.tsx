import React from 'react';
import { Layout } from 'antd';
import MainPage from '../../pages/main-page/main-page'
import Favourites from '../../pages/favourites/favourites'
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found'
import History from '../../pages/history/history';
import { Routes, Route } from 'react-router-dom';
import { HeaderNav } from '../header-nav/header-nav';

const { Footer } = Layout;

const App: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh', gap: '20px' }}>
      <HeaderNav />

      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/history" element={<History />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    
      <Footer style={{ textAlign: 'center', background: 'black', color: 'white'}}>
        ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
