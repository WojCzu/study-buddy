import React from 'react';
import { useParams } from 'react-router-dom';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { useStudents } from 'hooks/useStudents';

const UsersList = () => {
  const { id } = useParams();
  const { students: users } = useStudents({ groupId: id });
  return (
    <StyledList>
      {users.map((userData) => (
        <UsersListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  );
};

export default UsersList;
