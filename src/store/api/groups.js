import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),

    getStudentsByGroup: builder.query({
      query: (id) => `groups/${id}`,
    }),

    getStudentById: builder.mutation({
      query: (id) => `students/${id}`,
    }),

    findStudents: builder.mutation({
      query: (body) => ({
        url: '/students/search',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetGroupsQuery,
  useGetStudentByIdMutation,
  useGetStudentsByGroupQuery,
  useFindStudentsMutation,
} = groupsApi;
