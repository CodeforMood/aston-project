import { useEffect } from 'react';
import { Layout, theme, Row } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import FilmCard from '../../components/film-card/film-card';
import SearchForm from '../../components/search-form/search-from';

const { Content } = Layout;

function MainPage() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {movies, error, loading} = useTypedSelector(state => state.movies);
  const {fetchMovies} = useActions()
  

  useEffect(() => {
    fetchMovies('Niram')
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
            {movies.map((movie) => <FilmCard movie={movie} />)}
          </Row>
        </div>
      </Content>
    </>
  );
};

export default MainPage
