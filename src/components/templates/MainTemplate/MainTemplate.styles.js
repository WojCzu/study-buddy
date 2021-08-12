import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  overflow-y: hidden;

  display: grid;
  grid-template-columns: 150px 4fr 3fr;
  grid-template-rows: 90px 1fr;

  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
