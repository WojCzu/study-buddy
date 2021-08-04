import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
