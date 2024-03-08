import { RestOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '../../types/movies';
import { deleteFavouritesAction } from '../../store/actions/favourites-actions';
import { RootState } from '../../store/reducers';

const Favourites: React.FC = () => {
  let dispatch = useDispatch();
  let { favourites } = useSelector((state: RootState) => state.favourites);

  const deleteFavourites = (id: string) => {
    dispatch(deleteFavouritesAction(id));
  }

  return (
    <div
      style={{
        display: 'block',
        padding: '40px',
        fontWeight: 'bold',
        fontSize: '25px',
        minHeight: 'calc(100vh - 171px)',
      }}
    >
      Буду смотреть
      <ul>
        {favourites.map((item: Movie) =>
          <li
            key={item['#IMDB_ID']}
            style={{
              display: 'flex',
              marginBottom: '20px',
              position: 'relative',
            }}
          >
            <img
              src={item['#IMG_POSTER']}
              style={{
                width: 250,
                borderRadius: 5,
                cursor: 'pointer',
              }}
              alt="форсаж"
            />
            <span
              style={{
                position: 'absolute',
                left: 7,
                top: 7,
                fontSize: 18,
                backgroundColor: 'lightgreen',
                padding: '2px 7px',
                borderRadius: 5,
              }}
            >
              {item['#RANK']}
            </span>
            <div>
              <p
                style={{
                  margin: '0 0 0 20px',
                  color: 'black',
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                {item['#AKA']}
              </p>
              <p
                style={{
                  margin: '0 0 0 20px',
                  color: 'black',
                  fontSize: 15,
                  marginTop: 30,
                  fontWeight: 400
                }}
              >
                {`В главных ролях: ${item['#ACTORS']}`}
              </p>
            </div>

            <button style={{ border: 'none', background: 'none', cursor: 'pointer', position: 'absolute', right: 0 }}>
              {<RestOutlined
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                onClick={() => deleteFavourites(item['#IMDB_ID'])}
              />}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};


export default Favourites;
