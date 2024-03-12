import React from 'react'
import { useSelector } from 'react-redux';
import { Movie } from '../../types/movies';
import { RootState } from '../../store/reducers';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';

const MovieDetail: React.FC = () => {
  const location = useLocation();
  const stateMovie = useSelector((state: RootState) => state.movies.movies)

  const currentMovie = location.pathname.slice(9)
  const movie = stateMovie.find((item: Movie) => item['#IMDB_ID'] === currentMovie);

  return (
    <div style={{ minHeight: 'calc(100vh - 171px)', display: 'flex' }}>
      <img src={movie['#IMG_POSTER']} alt="poster" style={{ width: '500px', height: '700px', marginLeft: '40px' }} />
      <div style={{marginLeft: '40px'}}>
        <p style={{ marginLeft: '20px', fontSize: 26, fontWeight: 500 }}>{movie['#AKA']}</p>
        <p style={{ marginLeft: '20px', fontWeight: 500, color: 'black', fontSize: 20 }}>Актеры: {movie['#ACTORS']}</p>
        <p style={{ marginLeft: '20px', fontWeight: 500, color: 'black', fontSize: 20 }}>Год выпуска: {movie['#YEAR']}</p>
        <p style={{ marginLeft: '20px', fontWeight: 500, color: 'black', fontSize: 20 }}>Рейтинг: {movie['#RANK']}</p>
        <p style={{ marginLeft: '20px', marginTop: '100px', fontWeight: 500, color: 'black', fontSize: 20 }}>Посмотреть фильм можно нажав на кнопку ниже</p>
        <Button type="primary" style={{ marginLeft: '20px' }}>
          <a href={movie['#IMDB_URL']}> 
            Cмотреть
          </a>
        </Button>
      </div>
      
    </div>
  )
}

export default MovieDetail;
