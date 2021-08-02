import styled from 'styled-components';

export const StyledButton = styled.button`
  display: grid;
  place-items: center;

  width: 23px;
  height: 23px;

  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
