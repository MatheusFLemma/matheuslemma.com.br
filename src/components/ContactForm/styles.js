import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  h2 {
    font-size: 1.75rem;
    font-weight: 400;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (min-width: 834px) {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      'name name name email email email'
      'message message message message message message';
  }

  > button {
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors.blue['100']};
    }
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.dark['300']};
  color: ${(props) => props.theme.colors.light['100']};
  border: none;
  width: 100%;
  height: 2.25rem;
  border-radius: 10px;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.04);
  font-size: 1rem;
  transition: background 0.2s;

  &[type='name'] {
    grid-area: name;
  }

  &[type='email'] {
    grid-area: email;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.dark['100']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.light['100']};
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.dark['300']};
  color: ${(props) => props.theme.colors.light['100']};
  border: none;
  width: 100%;
  height: 12.25rem;
  resize: none;
  border-radius: 10px;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.04);
  font-size: 1rem;
  transition: background 0.2s;
  font-family: 'Montserrat', sans-serif;
  grid-area: message;

  &:hover {
    background-color: ${(props) => props.theme.colors.dark['100']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.light['100']};
  }
`;
