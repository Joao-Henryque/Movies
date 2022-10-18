import { Heart, Info } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { imagePath } from '../../utils/imagePath';
import { Container } from './MovieCard';

function MovieCard(props) {
  const { id, title, poster, handleSaveMovieAsFavorite, isFavorite } = props;

  return (
    <Container>
      <img src={`${imagePath}${poster}`} alt={title} loading='lazy' />
      <div className='card-footer'>
        <div className='details-link'>
          <Link to={`/movies/details/${id}`}>
            <Info size={18} weight='fill' />
            Details
          </Link>
        </div>
        <button onClick={handleSaveMovieAsFavorite}>
          <Heart
            size={24}
            color={isFavorite ? '#DD0000' : '#F2F2F7'}
            weight={isFavorite ? 'fill' : 'regular'}
          />
        </button>
      </div>
    </Container>
  );
}

export default MovieCard;
