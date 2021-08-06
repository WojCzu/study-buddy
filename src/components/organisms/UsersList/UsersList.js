import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { UsersContext } from 'views/Root';

const UsersList = () => {
  const { users } = useContext(UsersContext);
  return (
    <StyledList>
      {users.map((userData) => (
        <UsersListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  );
};

export default UsersList;
