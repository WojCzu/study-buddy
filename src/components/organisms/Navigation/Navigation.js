import React from 'react';
import { StyledNav, Logo, StyledLink } from './Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();

  return (
    <StyledNav>
      <Logo>
        <h1>Study Buddy</h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/notes">Notes</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </StyledNav>
  );
};

export default Navigation;
