import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { UserShape } from 'types';

const UsersList = ({ users, deleteUser }) => (
  <StyledList>
    {users.map((userData) => (
      <UsersListItem
        key={userData.name}
        userData={userData}
        deleteUser={deleteUser}
      />
    ))}
  </StyledList>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
