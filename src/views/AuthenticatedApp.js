import React from 'react';
import { Wrapper } from './Root.styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Notes from 'views/Notes';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
