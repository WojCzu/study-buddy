import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  padding: 0 40px;

  grid-column: 2 / 3;
  grid-row: 1 / 2;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};

  ${Input} {
    width: 100%;
    max-width: 350px;

    padding: 0.8em 1.6em;
  }
`;
export const StatusInfo = styled.div`
  margin-right: 40px;

  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    margin: 5px;
  }
`;
