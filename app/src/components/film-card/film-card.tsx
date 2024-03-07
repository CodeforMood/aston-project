import { HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col} from "antd";
import Meta from "antd/es/card/Meta";


const FilmCard: React.FC<{ movie: any }> = (props) => {

  return (
    <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
      <Card
        hoverable
        style={{ minWidth: 180, maxWidth: 320, }}
        cover={<img alt="example" src={props.movie['#IMG_POSTER']} />}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <Button icon={<HeartOutlined />} />
          <Meta title={props.movie['#TITLE']} />
        </div>
      </Card>
    </Col>
  )
}

export default FilmCard
