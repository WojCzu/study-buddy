import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => (
  <Wrapper>
    <StyledTitle>Students list</StyledTitle>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem
          key={userData.name}
          userData={userData}
          deleteUser={deleteUser}
        />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
