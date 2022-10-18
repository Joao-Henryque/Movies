import styled from 'styled-components';

export const Container = styled.header`
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.colors.app.primary};
    font-weight: 600;
    margin-bottom: 1rem;
  }

  nav {
    ul {
      display: flex;
      gap: 1.5rem;

      li {
        a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: ${({ theme }) => theme.colors.text.primary};
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }

          &:active {
            transform: scale(1.05);
          }
        }
      }
    }
  }
`;
