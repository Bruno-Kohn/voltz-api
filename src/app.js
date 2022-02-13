import express from 'express';
import cors from 'cors';
import { getTools } from './controllers/getTools.js';
import { postTools } from './controllers/postTools.js';
import { deleteTools } from './controllers/deleteTools.js';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerDocs = require('./swagger.json');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // http://localhost:3000/api-docs/

app.get('/tools', getTools);
app.post('/tools', postTools);
app.delete('/tools/:id', deleteTools);

export default app;
