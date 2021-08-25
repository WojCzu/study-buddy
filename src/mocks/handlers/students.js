import { rest } from 'msw';
import { db } from 'mocks/db';

export const students = [
  rest.get('/students/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudent = db.student.findFirst({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
      if (!matchingStudent) {
        return res(
          ctx.status(404),
          ctx.json({
            error: 'No matching student',
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudent,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students: db.student.getAll(),
      })
    );
  }),

  rest.post('/students/search', (req, res, ctx) => {
    if (!req.body.searchPhrase) {
      return res(
        ctx.status(200),
        ctx.json({
          students: [],
        })
      );
    }
    const re = new RegExp(req.body.searchPhrase, 'i');
    const matchingStudents = db.student
      .getAll()
      .filter(({ name }) => name.match(re));
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),
];
