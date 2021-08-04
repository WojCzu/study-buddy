import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';

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

export default UsersList;
