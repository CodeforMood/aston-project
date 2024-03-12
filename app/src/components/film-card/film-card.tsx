import { HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { Movie } from "../../types/movies";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../utils/const";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useState } from "react";
import { useAddFavouriteActions } from "../../hooks/useActions";

const FilmCard: React.FC<{ movie: Movie }> = (props) => {
  const {addFavouritesAction, deleteFavouritesAction} = useAddFavouriteActions();
  const {favourites} = useTypedSelector(state => state.favourites);
  const isFavouriteCard = favourites.find((movieItem: Movie) => movieItem['#IMDB_ID'] === props.movie['#IMDB_ID'])
  const [isFavouriteMovie, setFavouriteMovie] = useState<boolean>(Boolean(isFavouriteCard));

  const handleFavouriteButton = () => {
    console.log(isFavouriteMovie)
    if (isFavouriteMovie) {
      setFavouriteMovie(!isFavouriteMovie)
      deleteFavouritesAction(props.movie['#IMDB_ID']);

      return
    }
    setFavouriteMovie(!isFavouriteMovie)
    addFavouritesAction(props.movie)
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
          <Button icon={<HeartOutlined style={isFavouriteMovie ? { color: 'blue' } : { color: 'black' }} />} onClick={handleFavouriteButton} />
          <Meta title={props.movie['#AKA']} />
        </div>
      </Card>
    </Col>
  )
}


export default FilmCard;
