import { useCallback } from 'react';
import { useError } from 'hooks/useError';
import axios from 'axios';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const { dispatchError } = useError();

  const getStudentsByGroup = useCallback(
    async (groupId) => {
      try {
        const result = await studentsAPI.get(`/groups/${groupId}`);
        return result.data.students;
      } catch (err) {
        dispatchError(err);
      }
    },
    [dispatchError]
  );

  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups.map((group) => group.id);
    } catch (err) {
      dispatchError(err);
    }
  }, [dispatchError]);

  const getStudentById = useCallback(
    async (studentId) => {
      try {
        const result = await studentsAPI.get(`/students/${studentId}`);
        return result.data.students;
      } catch (err) {
        dispatchError(err);
      }
    },
    [dispatchError]
  );

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (err) {
      dispatchError(err);
    }
  };

  return { getStudentsByGroup, getGroups, findStudents, getStudentById };
};
