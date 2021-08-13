import React from 'react';
import { StyledNav, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNav>
      <Logo>
        <h1>Study Buddy</h1>
      </Logo>
      <StyledLink exact to="/group">
        Dashboard
      </StyledLink>
      <StyledLink exact to="/add-user">
        Add user
      </StyledLink>
      <StyledLink exact to="/settings">
        Settings
      </StyledLink>
      <StyledLink exact to="/logout">
        Logout
      </StyledLink>
    </StyledNav>
  );
};

export default Navigation;
