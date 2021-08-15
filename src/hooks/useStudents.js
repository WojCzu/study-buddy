import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {
  const getStudents = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/students/${groupId}`);
      return result.data.students;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  return { getStudents, getGroups, findStudents };
};
