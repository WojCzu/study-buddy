import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.get('/students/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.id
      );
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),
];
