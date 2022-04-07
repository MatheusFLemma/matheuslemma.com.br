import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  > main {
    margin: 5rem auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;

    @media screen and (min-width: 834px) {
      padding: 1rem;
    }

    > p {
      font-size: 1.125rem;
      text-align: justify;
      color: ${(props) => props.theme.colors.light['300']};

      @media screen and (min-width: 834px) {
        font-size: 1.5rem;
      }
    }

    > section {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      @media screen and (min-width: 834px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
      }

      @media screen and (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
      }

      button {
        width: 100%;
        box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.04);

        a {
          color: ${(props) => props.theme.colors.dark['400']};
          font-weight: 400;
        }
      }
    }
  }
`;
