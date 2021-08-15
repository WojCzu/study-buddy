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

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  z-index: 1000;
  width: 100%;
  max-height: 500px;
  padding: 10px;

  position: absolute;
  left: 0;
  top: 30px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const SearchResultsItem = styled.li`
  width: 100%;
  padding: 20px 5px;

  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colors.lightPurple : theme.colors.white};

  span {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
