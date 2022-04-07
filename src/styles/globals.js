import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background-color: ${(props) => props.theme.colors.dark['400']};
    font-family: 'Montserrat', sans-serif;
    font-size: 100%;
  }

  h1 {
    font-size: 2.625rem;
    color: ${(props) => props.theme.colors.blue['50']};
  }

  h2 {
    font-size: 2.625rem;
    color: ${(props) => props.theme.colors.blue['50']};
  }

  h3, h4 {
    font-size: 1.75rem;
    color: ${(props) => props.theme.colors.blue['50']};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.blue['50']};
    color: ${(props) => props.theme.colors.dark['400']};
    padding: .5rem 0;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.04);
    transition: background 0.5s;

    &:hover {
      background-color: ${(props) => props.theme.colors.blue['100']};
    }
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    @media screen and (min-width: 834px) {
      max-width: 48rem;
      padding: 0 1rem;
    }
    
    @media screen and (min-width: 1440px) {
      max-width: 64rem;
    }
  }
`;
