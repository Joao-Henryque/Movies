import styled from 'styled-components';

export const Container = styled.li`
  max-width: 250px;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.app.second};
  border: 2px solid ${({ theme }) => theme.colors.backgroundColor};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.text.grey};
  }

  img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .details-link {
      position: relative;

      &::after {
        position: absolute;
        content: '';
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.app.third};
        border-radius: 2px;
        bottom: -5px;
        left: 0;
        right: 0;
        margin: 0 auto;
        transition: all 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${({ theme }) => theme.colors.app.primary};
        font-weight: 500;
        letter-spacing: 1px;

        svg {
          color: ${({ theme }) => theme.colors.app.third};
        }
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
  }
`;
