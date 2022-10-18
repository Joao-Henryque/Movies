import Header from '../../components/Header';
import ListWrapper from '../../components/ListWrapper';
import MovieList from '../../components/MovieList';
import PageWrapper from '../../components/PageWrapper';

function Movies() {
  return (
    <PageWrapper>
      <Header title='Movies' />
      <ListWrapper>
        <MovieList apiPath='movie/popular' />
      </ListWrapper>
    </PageWrapper>
  );
}

export default Movies;
