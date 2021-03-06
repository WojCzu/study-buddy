import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 100vh;
  width: 100%;
  padding: 20px 0;

  grid-column: 1 / 2;
  grid-row: 1 / 3;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const StyledLink = styled(NavLink)`
  padding: 5px;
  margin-bottom: 5px;
  margin-right: 15px;

  position: relative;

  font-weight: bold;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    width: 15px;
    height: 3px;

    position: absolute;
    top: 50%;
    right: -15px;

    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

export const Logo = styled.div`
  width: 100%;
  padding: 13px 20px 13px 50%;
  margin-bottom: 30px;

  background-color: ${({ theme }) => theme.colors.darkGrey};

  h1 {
    margin: 0;

    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
  }
`;
