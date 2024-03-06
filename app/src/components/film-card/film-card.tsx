import { HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col} from "antd";
import Meta from "antd/es/card/Meta";

function FilmCard() {
  return (
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
  )
}

export default FilmCard
