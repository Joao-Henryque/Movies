import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './NotFound';

import PageNotFoundSvg from '../../assets/not_found.svg';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setTimeout(() => {
      navigate('/movies');
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <h1>Page not found!</h1>
      <img src={PageNotFoundSvg} alt='Page not found' loading='lazy' />
      <span>Redirecting to movies page in 3 seconds...</span>
    </Container>
  );
}

export default NotFound;
