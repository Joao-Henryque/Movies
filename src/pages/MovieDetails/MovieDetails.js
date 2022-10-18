import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  button {
    display: flex;

    svg {
      color: ${({ theme }) => theme.colors.text.primary};
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 3rem;

  img {
    height: 500px;
    border-radius: 0.5rem;
  }

  .movie-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      color: ${({ theme }) => theme.colors.app.primary};
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 3px;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .extra-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .info {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
          font-size: 0.875rem;
          color: ${({ theme }) => theme.colors.text.grey};
          letter-spacing: 1px;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
  }
`;
