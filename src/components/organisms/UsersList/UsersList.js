import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          type="number"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          type="number"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button>Add</Button>
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
