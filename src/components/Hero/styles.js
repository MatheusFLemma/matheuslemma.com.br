import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-areas:
      'title title'
      'code  hero';
    grid-template-columns: repeat(2, 1fr);
  }

  > div {
    flex: 4;
    grid-area: title;
  }

  > .code {
    grid-area: code;
  }

  > img {
    grid-area: hero;
  }
`;

export const TextContainer = styled.section`
  width: 100%;

  h1 {
    @media screen and (min-width: 834px) {
      font-size: 4rem;
    }
  }

  > h2 {
    font-weight: 400;
    @media screen and (min-width: 834px) {
      font-size: 4rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;

  @media screen and (min-width: 834px) {
    width: 25.5rem;
  }
`;

export const CodeItem = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.colors.dark['300']};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.04);
  font-size: 0.75rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.colors.light['100']};

  .comment {
    color: ${(props) => props.theme.colors.blue['500']};
  }

  .string {
    color: ${(props) => props.theme.colors.yellow['50']};
  }

  .number {
    color: ${(props) => props.theme.colors.pink['50']};
  }

  .pink {
    color: ${(props) => props.theme.colors.pink['200']};
  }

  .tab__one {
    margin-left: 1rem;
  }

  .tab__two {
    margin-left: 2rem;
  }
`;
