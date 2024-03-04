import React, { useEffect } from 'react';
import { Card, Layout, theme, Button, Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import Meta from 'antd/es/card/Meta';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const { Content } = Layout;

function MainPage() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {movies, error, loading} = useTypedSelector(state => state.movies);
  const {fetchMovies} = useActions()
  

  useEffect(() => {
    fetchMovies()
  }, [])

  console.log(movies);

  return (
    <>
      <Search style={{ padding: '0 48px', }}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
      />
      <Content style={{ padding: '0 48px', flexGrow: 1, display: 'flex', flexDirection: 'column', }}>
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
                style={{ minWidth: 180, maxWidth: 320, }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
              <Card
                hoverable
                style={{ minWidth: 180, maxWidth: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                  <Button icon={<HeartOutlined />} />
                  <Meta title="TITLE" />
                </div>
              </Card>
            </Col>
          </Row>

        </div>
      </Content>
    </>
  );
};

export default MainPage;