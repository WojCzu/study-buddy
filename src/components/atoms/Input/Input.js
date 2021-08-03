import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;

  padding: 5px 8px;

  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
