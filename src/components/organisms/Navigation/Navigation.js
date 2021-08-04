import React from 'react';
import { StyledNav, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNav>
      <Logo>
        <h1>Study Buddy</h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/add-user">Logout</StyledLink>
    </StyledNav>
  );
};

export default Navigation;
