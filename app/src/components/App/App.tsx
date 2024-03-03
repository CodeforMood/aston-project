import React from 'react';
import { Layout, Menu } from 'antd';
import MainPage from '../../pages/main-page/main-page'
import Favourites from '../../pages/favourites/favourites'
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found'
import History from '../../pages/history/history';
import { Link, Routes, Route } from 'react-router-dom';
import { MenuItem } from '../../types/menu-item';
import { AppRoute } from '../../const';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: '',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to={AppRoute.SignUp}> Регистрация </Link>, '1'),
  getItem(<Link to={AppRoute.Favourites}> Избранное </Link>, '2'),
  getItem(<Link to={AppRoute.History}> История </Link>, '3'),
]

const { Header, Footer } = Layout;

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
        <Link to={AppRoute.Root} style={{display: 'flex', alignItems: 'center'}}> 
          <img src="img/logo.jpg" alt="logo" style={{ height: 36, width: 35 }} />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: 'right', }}
        />
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
