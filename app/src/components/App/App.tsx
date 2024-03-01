import React from 'react';
import {Layout, Menu } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page'
import Favourites from '../../pages/favourites/Favourites'
import History from '../../pages/history/history'
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found'


const { Header, Footer } = Layout;

const items = ['Sign In', 'Sign Up'].map((item, index) => ({
  key: String(index + 1),
  label: item,
}));

const App: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh', gap: '20px' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src="img/logo.jpg" alt="logo" style={{ height: 36, width: 35 }} />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: 'right', }}
        />
        <Link 
          to={'/sign-up'}
          style={{
            color: 'white',
          }}
        >
          Регистрация
        </Link>
        <Link 
          to={'/favourites'} 
          style={{
            margin: '10px',
            color: 'white',
          }}
        >
          Избранное
        </Link>
        <Link 
          to={'/history'}
          style={{
            color: 'white',
          }}
        >
          История поиска
        </Link>
      </Header>

      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/history" element={<History />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    
      <Footer style={{ textAlign: 'center', flexShrink: 0, background: 'black', color: 'white' }}>
        ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
