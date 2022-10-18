import {
  CalendarBlank,
  CaretCircleLeft,
  CurrencyDollar,
  FilmSlate,
  Heart,
  Star,
  ThumbsUp,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import PageWrapper from '../../components/PageWrapper';
import MovieDetailsLoader from '../../components/Skeleton/MovieDetailsLoader';
import saveMovieAsFavorite from '../../httpClient/saveMovieAsFavorite';

import { apiMovieDb } from '../../services/axios';
import { isMovieAlreadyFavorite } from '../../services/isMovieAlreadyFavorite';
import { imagePath } from '../../utils/imagePath';
import { Container, Content, ContentHeader, Details } from './MovieDetails';

function MovieDetails() {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});

  const { favoriteMovies, handleSaveMovieAsFavorite } = saveMovieAsFavorite();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiMovieDb.get(
          `movie/${params.id}${process.env.API_KEY}`
        );
        const movie = await data;

        setMovieDetails(movie);
      } catch (error) {
        toast.error(error.response.data.status_message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <PageWrapper>
      <Container>
        {loading ? (
          <MovieDetailsLoader />
        ) : (
          <Content>
            <ContentHeader>
              <Link to={-1}>
                <CaretCircleLeft size={18} weight='bold' />
                Back
              </Link>
              <button
                onClick={() =>
                  handleSaveMovieAsFavorite(movieDetails.title, movieDetails.id)
                }
              >
                <Heart
                  size={34}
                  color={
                    isMovieAlreadyFavorite(favoriteMovies, movieDetails.id)
                      ? '#DD0000'
                      : '#F2F2F7'
                  }
                  weight={
                    isMovieAlreadyFavorite(favoriteMovies, movieDetails.id)
                      ? 'fill'
                      : 'regular'
                  }
                />
              </button>
            </ContentHeader>
            <Details>
              <img
                src={`${imagePath}${movieDetails.poster_path}`}
                alt='teste'
                loading='lazy'
              />
              <div className='movie-details'>
                <h1>{movieDetails.title}</h1>
                <p>{movieDetails.overview}</p>
                <div className='extra-details'>
                  <div className='info'>
                    <CalendarBlank size={18} weight='fill' />
                    <span>
                      {movieDetails.release_date.replaceAll('-', '/')}
                    </span>
                  </div>
                  <div className='info'>
                    <Star size={18} weight='fill' color='#FFDD00' />
                    <span>{movieDetails.popularity.toFixed(2)}</span>
                  </div>
                  <div className='info'>
                    <ThumbsUp size={18} weight='fill' color='#7f93ff' />
                    <span>{movieDetails.vote_average.toFixed(1)}</span>
                  </div>
                  {movieDetails.budget !== 0 && (
                    <div className='info'>
                      <CurrencyDollar size={18} weight='fill' color='#38B000' />
                      <span>
                        {movieDetails.budget.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    </div>
                  )}
                  <div className='info'>
                    <ul>
                      {movieDetails.production_companies.map((company) => (
                        <li key={company.id}>
                          <FilmSlate size={18} weight='fill' />
                          <span>{company.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Details>
          </Content>
        )}
      </Container>
    </PageWrapper>
  );
}

export default MovieDetails;
