import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  margin: 15px 0;

  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};

  font-weight: bold;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`;
