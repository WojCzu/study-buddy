import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!groupId) return;
    axios
      .get(`/students/${groupId}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.error(err));
  }, [groupId]);

  return { students, groups };
};
