import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { useStudents } from 'hooks/useStudents';

const UsersList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { getStudentsByGroup } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <StyledList>
      {students.map((userData) => (
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
