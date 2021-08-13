import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  place-items: center;

  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  //  fix margin when showing scroll
  grid-template-rows: 1fr 1px;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
  }
`;
