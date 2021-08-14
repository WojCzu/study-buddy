import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;

  display: grid;
  grid-template-rows: 70px 1fr;
`;
export const StyledHeader = styled.header`
  ${Title} {
    margin: 0;
  }
  nav {
    width: 80px;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.lightGrey};

  &.active {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
export const ContentWrapper = styled.div`
  margin-top: 30px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
