import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  margin: 20px;

  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
