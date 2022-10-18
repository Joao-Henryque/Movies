import { Info, Trash } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Container } from './FavoriteMovieCard';

function FavoriteMovieCard(props) {
  const { id, title, handleRemoveFavoriteMovie } = props;

  return (
    <Container>
      <h5>{title}</h5>
      <div className='card-footer'>
        <div className='details-link'>
          <Link to={`/movies/details/${id}`}>
            <Info size={18} weight='fill' />
            Details
          </Link>
        </div>
        <button onClick={handleRemoveFavoriteMovie}>
          <Trash size={24} weight='regular' />
        </button>
      </div>
    </Container>
  );
}

export default FavoriteMovieCard;
