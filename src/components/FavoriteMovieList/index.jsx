import { HeartBreak } from 'phosphor-react';
import Empyt from '../../assets/empyt.svg';
import removeMovieFromFavorites from '../../httpClient/removeMovieFromFavorites';
import FavoriteMovieCard from '../FavoriteMovieCard';
import FavoriteMovieListLoader from '../Skeleton/FavoriteMovieListLoader';

import { Container, EmpytList } from './FavoriteMovieList';

function FavoriteMovieList() {
  const { favoriteMovies, handleRemoveFavoriteMovie, loading } =
    removeMovieFromFavorites();

  if (loading) {
    return <FavoriteMovieListLoader />;
  }

  return (
    <Container>
      {favoriteMovies.length === 0 ? (
        <EmpytList>
          <img src={Empyt} alt='Empyt data' loading='lazy' />
          <span>
            You do not have favorite movies{' '}
            <HeartBreak size={24} weight='regular' />
          </span>
        </EmpytList>
      ) : (
        favoriteMovies.map((movie) => (
          <FavoriteMovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            handleRemoveFavoriteMovie={() =>
              handleRemoveFavoriteMovie(movie.id, movie.title)
            }
          />
        ))
      )}
    </Container>
  );
}

export default FavoriteMovieList;
