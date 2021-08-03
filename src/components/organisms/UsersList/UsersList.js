import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          type="number"
        />
        <FormField label="Average" id="average" name="average" type="number" />
        <button>Add</button>
      </Wrapper>
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
    </>
  );
};

export default UsersList;
