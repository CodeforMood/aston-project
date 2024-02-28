import React from 'react';
import { Card, Layout, Menu, theme, Button, Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import Meta from 'antd/es/card/Meta';
const { Header, Content, Footer } = Layout;

const items = ['Sign In', 'Sign Up'].map((item, index) => ({
  key: String(index + 1),
  label: item,
}));

export function MainPage()  {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{minHeight: '100vh',  gap: '20px'}}>
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
        <img src="img/logo.jpg" alt="logo" style={{height: 35, width: 35}}/>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: 'right', }}
        />
      </Header>
      <Search style={{ padding: '0 48px',}}
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
      />
      <Content style={{ padding: '0 48px', flexGrow: 1, display: 'flex', flexDirection: 'column',}}>
        <div
          style={{
            padding: 84,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            flexGrow: 1,
          }}
        >
          <Row gutter={[36, 36]}>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320,}}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320}}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
              hoverable
              style={{ minWidth: 180, maxWidth: 320 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{display: 'flex', alignItems: 'center', gap:15}}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE"/>
                </div>
              </Card>
            </Col>
          </Row>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center', flexShrink: 0, background: 'black', color: 'white'}}>
       ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};
