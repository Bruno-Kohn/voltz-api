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

      console.log(tags);

      const result = await connection.query(
        'SELECT * FROM tools where title = $1',
        [title]
      );

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
