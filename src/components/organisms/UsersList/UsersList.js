import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { useStudents } from 'hooks/useStudents';

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const { getStudents } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

  return (
    <StyledList>
      {students.map((userData) => (
        <UsersListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  );
};

export default UsersList;
