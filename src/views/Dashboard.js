import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UserShape } from 'types';

const Dashboard = ({ users, deleteUser }) => (
  <ViewWrapper>
    <Title>Student List</Title>
    <UsersList users={users} deleteUser={deleteUser} />
  </ViewWrapper>
);

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape).isRequired),
  deleteUser: PropTypes.func.isRequired,
};

export default Dashboard;
