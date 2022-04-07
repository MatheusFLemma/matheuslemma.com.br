import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 13.5rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 0 3.25rem;
  }

  > section {
    > h1 {
      font-size: 2rem;

      @media screen and (min-width: 834px) {
        font-size: 3rem;
      }
    }
  }
`;
