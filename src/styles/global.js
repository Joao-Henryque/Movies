import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  input:focus{
    outline: none;
  }

  a {
      text-decoration: none;
    }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.app.second};
    border-radius: 4px;
  }
`;
