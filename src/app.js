import express from 'express';
import cors from 'cors';
import * as recommendationController from './controllers/recommendationController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  // Manda como resposta o texto 'Hello World'
  res.send('Server online');
});

app.post('/recommendations', recommendationController.postRecommendation);

export default app;
