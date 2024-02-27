import React from 'react';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const items = ['SignIn', 'SignUp'].map((item, index) => ({
  key: String(index + 1),
  label: item,
}));

export function App()  {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{minHeight: '100vh',}}>
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
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: 'right', }}
        />
      </Header>
      <Content style={{ padding: '0 48px', flexGrow: 1, display: 'flex', flexDirection: 'column', }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            flexGrow: 1,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', flexShrink: 0, }}>
       ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
