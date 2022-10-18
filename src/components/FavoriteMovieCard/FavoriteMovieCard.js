import styled from 'styled-components';

export const Container = styled.li`
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  gap: 3rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.backgroundColor};
  background-color: ${({ theme }) => theme.colors.app.second};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.text.grey};
  }

  h5 {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
        color: #dd0000;
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
