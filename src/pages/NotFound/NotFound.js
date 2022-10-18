import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 3px;
  }

  img {
    margin: 3rem 0;
    height: 300px;
  }
`;
