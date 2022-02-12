import express from 'express';
import cors from 'cors';
import { getTools } from './controllers/getTools.js';
import { postTools } from './controllers/postTools.js';
import { deleteTools } from './controllers/deleteTools.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/tools', getTools);
app.post('/tools', postTools);
app.delete('/tools/:id', deleteTools);

export default app;
