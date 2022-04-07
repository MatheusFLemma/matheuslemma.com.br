import styled from 'styled-components';

export const Container = styled.div`
  > a {
    background-image: url(${(props) => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.dark['200']};
    display: flex;
    height: 7.75rem;
    width: 100%;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: end;

    > section {
      > h1 {
        font-size: 1rem;
        text-transform: lowercase;
        font-weight: 700;
        color: ${(props) => props.theme.colors.blue['300']};
      }
    }

    &:hover {
      > section {
        > h1 {
          text-decoration: underline;
        }
      }
    }
  }
`;
