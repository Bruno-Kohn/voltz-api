import connection from '../../database/database.js';

async function deleteTools(req, res) {
  try {
    const result = await connection.query(
      'SELECT tools.*, ARRAY_AGG(tags.name) AS tags FROM tools JOIN tools_tags ON tools.id=tools_tags.tools_id JOIN tags ON tags.id=tools_tags.tags_id GROUP BY tools.id;'
    );
    return res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export { deleteTools };
