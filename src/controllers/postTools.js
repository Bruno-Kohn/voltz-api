import connection from '../../database/database.js';
import Joi from 'joi';

async function postTools(req, res) {
  const schema = Joi.object({
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string())
  });

  try {
    await schema.validateAsync(req.body);
    const { title, link, description, tags } = req.body;

    if (title && link && description && tags) {
      const checkNewTool = await connection.query(
        'SELECT * FROM tools where title = $1',
        [title]
      );

      if (checkNewTool.rows.length > 0) {
        return res.status(409).send('Tool already been registered');
      }

      await connection.query(
        'INSERT INTO tools (title, link, description) VALUES ($1, $2, $3)',
        [title, link, description]
      );

      await tags.forEach((i) =>
        connection.query('INSERT INTO tags (name) VALUES ($1)', [i])
      );

      const result = await connection.query(
        'SELECT * FROM tools where title = $1',
        [title]
      );

      tags.forEach(async (i) => {
        const resultTags = await connection.query(
          'SELECT * FROM tags where name = $1',
          [i]
        );

        await connection.query(
          'INSERT INTO tools_tags (tags_id, tools_id) VALUES ($1, $2)',
          [resultTags.rows[0].id, result.rows[0].id]
        );
      });

      return res
        .status(201)
        .send({ title, link, description, tags, id: result.rows[0].id });
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export { postTools };
