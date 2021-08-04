import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = ({ users, deleteUser }) => (
  <ViewWrapper>
    <Title>Add new student</Title>
    <UsersList users={users} deleteUser={deleteUser} />
  </ViewWrapper>
);

export default Dashboard;
