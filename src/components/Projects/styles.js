import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ProjectContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.dark['200']};
  padding: 0.5rem;
  border-radius: 10px;

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 60%;

    &:nth-child(even) {
      margin-left: auto;
    }
  }

  > section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'image title'
      'description description';
    column-gap: 1.375rem;
    row-gap: 0.5rem;

    @media screen and (min-width: 834px) {
      grid-template-columns: 9.8125rem 1fr;
      grid-template-rows: repeat(2, auto);
      grid-template-areas:
        'image title'
        'image description';
    }

    > picture {
      grid-area: image;
      background-image: url(${(props) => props.imgUrl});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      width: 9.8125rem;
      height: 5.5625rem;

      @media screen and (min-width: 834px) {
        width: 100%;
        height: 4.3125rem;
      }
    }

    > span {
      grid-area: title;

      a {
        font-size: 1rem;
        font-weight: 700;
        text-transform: lowercase;
        color: ${(props) => props.theme.colors.blue['300']};

        &:hover {
          text-decoration: underline;
        }
      }
    }

    > p {
      grid-area: description;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.light['400']};
    }
  }
`;
