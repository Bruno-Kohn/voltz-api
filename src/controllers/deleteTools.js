import connection from '../../database/database.js';

async function deleteTools(req, res) {
  const { id } = req.params;

  try {
    const result = await connection.query('SELECT * FROM tools WHERE id = $1', [
      id
    ]);

    if (result.rows.length === 0) return res.sendStatus(404);

    await connection.query('DELETE FROM tools_tags WHERE tools_id = $1', [id]);
    await connection.query('DELETE FROM tools WHERE id = $1', [id]);
    return res.status(200).send({});
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export { deleteTools };
