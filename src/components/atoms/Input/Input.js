import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;

  padding: 0.4em 0.6em;

  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 1.5em;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderGrey};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
