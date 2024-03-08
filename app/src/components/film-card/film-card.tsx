import { HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { Movie } from "../../types/movies";
import { addFavouritesAction, deleteFavouritesAction } from "../../store/actions/favourites-actions";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppRoute } from "../../const";

const FilmCard: React.FC<{ movie: Movie }> = (props) => {
  let [activFavourites, setActivFavourites] = useState(false);
  let dispatch = useDispatch();

  const AddFavourites = () => {
    dispatch(addFavouritesAction(props.movie))
    setActivFavourites(!activFavourites)
  }

  if (!activFavourites) {
    dispatch(deleteFavouritesAction(props.movie['#IMDB_ID']))
  }

  let navigate = useNavigate()

  const navigateFilms = () => {
    if (props.movie['#IMDB_ID']) {
      return navigate(`${AppRoute.MovieDetail.slice(0, -4) }/${props.movie['#IMDB_ID']}`)
    }
  }

  return (
    <Col xxl={6} xl={8} lg={12} md={16} sm={20} xs={24}>
      <Card
        hoverable
        style={{ minWidth: 180, maxWidth: 320, }}
        cover={<img alt="example" src={props.movie['#IMG_POSTER']} onClick={navigateFilms} />}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <Button icon={<HeartOutlined style={activFavourites ? { color: 'blue' } : { color: 'black' }} />} onClick={AddFavourites} />
          <Meta title={props.movie['#AKA']} />
        </div>
      </Card>
    </Col>
  )
}


export default FilmCard;
