import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => (
  <ViewWrapper>
    <Title>Students list</Title>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem
          key={userData.name}
          userData={userData}
          deleteUser={deleteUser}
        />
      ))}
    </StyledList>
  </ViewWrapper>
);

export default UsersList;
