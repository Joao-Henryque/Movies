import { Fire, Heart, Popcorn } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Container } from './Header';

function Header(props) {
  const { title } = props;

  return (
    <Container>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <Link to='/movies'>
              <Popcorn size={24} weight='regular' />
              Movies
            </Link>
          </li>
          <li>
            <Link to='/favorites'>
              <Heart size={24} weight='regular' />
              Favorites
            </Link>
          </li>
          <li>
            <Link to='/trending'>
              <Fire size={24} weight='regular' />
              Trending
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
