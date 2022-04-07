import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 5rem;
  width: 100%;
  height: 3rem;
  border-top: 1px solid ${(props) => props.theme.colors.dark['50']};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.blue['50']};

      &:hover {
        color: ${(props) => props.theme.colors.blue['100']};
        text-decoration: underline;
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      > svg {
        width: 1rem;
        height: 1rem;
        color: ${(props) => props.theme.colors.light['200']};
        cursor: pointer;
        transition: color 0.5s;

        &:hover {
          color: ${(props) => props.theme.colors.light['400']};
        }
      }
    }
  }
`;
