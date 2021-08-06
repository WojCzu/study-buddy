import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => (
  <ViewWrapper>
    <Title>Student List</Title>
    <UsersList />
  </ViewWrapper>
);

export default Dashboard;
