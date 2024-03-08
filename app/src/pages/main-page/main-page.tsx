import { useEffect } from 'react';
import { Layout, theme, Row } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import FilmCard from '../../components/film-card/film-card';
import SearchForm from '../../components/search-form/search-from';
import { Movie } from '../../types/movies';

const { Content } = Layout;

const MainPage: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { movies, error, loading } = useTypedSelector(state => state.movies);
  const { fetchMovies } = useActions()


  useEffect(() => {
    fetchMovies('')
  }, [])

  console.log(movies);

  return (
    <>
      <SearchForm />
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
            {movies.map((movie: Movie, index: number) =>
              <FilmCard key={index} movie={movie} />
            )}
          </Row>
        </div>
      </Content>
    </>
  );
};

export default MainPage
