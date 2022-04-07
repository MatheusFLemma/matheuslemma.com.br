import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  > div {
    text-align: center;

    > h2 {
      font-weight: 400;
    }
  }

  > span {
    font-size: 8rem;
  }

  > a {
    color: ${({ theme }) => theme.colors.light['transparent']};
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.blue['50']};
      text-decoration: underline;
    }
  }
`;
