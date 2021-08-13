import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.error(err));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.length
          ? groups.map((group) => (
              <Link key={group} to={`/group/${group}`}>
                {group}
              </Link>
            ))
          : null}
      </nav>
      <Title>Student List</Title>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
