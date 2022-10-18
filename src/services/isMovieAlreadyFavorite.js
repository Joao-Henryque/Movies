export const isMovieAlreadyFavorite = (favoriteMovies, currentMovieId) => {
  const list = favoriteMovies.findIndex((movie) => movie.id === currentMovieId);

  return list > -1;
};
