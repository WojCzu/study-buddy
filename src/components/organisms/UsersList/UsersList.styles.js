import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px 0;
  padding: 40px 30px;

  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;
