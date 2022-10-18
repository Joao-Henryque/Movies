import FavoriteMovieList from '../../components/FavoriteMovieList';
import Header from '../../components/Header';
import ListWrapper from '../../components/ListWrapper';
import PageWrapper from '../../components/PageWrapper';

function FavoriteMovies() {
  return (
    <PageWrapper>
      <Header title='Favorites' />
      <ListWrapper>
        <FavoriteMovieList />
      </ListWrapper>
    </PageWrapper>
  );
}

export default FavoriteMovies;
