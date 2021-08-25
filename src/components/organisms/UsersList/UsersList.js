import React from 'react';
import { useParams } from 'react-router-dom';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { useGetStudentsByGroupQuery } from 'store';

const UsersList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetStudentsByGroupQuery(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledList>
      {data.students.map((userData) => (
        <UsersListItem
          onClick={() => {
            handleOpenStudentDetails(userData.id);
          }}
          key={userData.id}
          userData={userData}
        />
      ))}
    </StyledList>
  );
};

export default UsersList;
