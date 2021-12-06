import express from 'express';
import cors from 'cors';
import recommendationRouter from './routers/recommendationRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  // Manda como resposta o texto 'Hello World'
  res.send('Server online');
});

app.use('/recommendations', recommendationRouter);

export default app;
