import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const EmpytList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  img {
    height: 300px;
  }

  span {
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.grey};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
