import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.dark['50']};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li`
  > a {
    color: ${(props) =>
      props.isActive ? props.theme.colors.blue['50'] : props.theme.colors.light['transparent']};
    transition: 0.5s;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      left: 0;
      bottom: -3px;
      background-color: ${(props) => props.theme.colors.blue['50']};
      transition: transform 0.25s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
