import connection from "../../database/database.js";
import Joi from 'joi';

async function postTools (req, res) {
    const schema = Joi.object({
        title: Joi.string().required(),
        link: Joi.string().required(),
        description: Joi.string().required(),
        tags: Joi.array().items(Joi.string()),
    });

    try {
        const value = await schema.validateAsync(req.body);
        const { title, link, description, tags } = req.body;
        if(title && link && description && tags) await connection.query('INSERT INTO tools (title, link, description) VALUES ($1, $2, $3)', [title, link, description]);
        return res.send({title, link, description}).status(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export { postTools };  