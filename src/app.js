import express from 'express';
import cors from 'cors';
import { getTools } from './controllers/getTools.js';
import { postTools } from './controllers/postTools.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/tools', getTools);
app.post('/tools', postTools);

export default app;