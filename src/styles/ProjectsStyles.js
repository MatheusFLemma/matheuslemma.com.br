import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media screen and (min-width: 834px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
