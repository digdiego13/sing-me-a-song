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
app.post(
  '/recommendations/:id/upvote',
  recommendationController.upRecommendations,
);
app.post(
  '/recommendations/:id/downvote',
  recommendationController.downRecommendations,
);

app.get('/recommendations/random', recommendationController.getRecommendation);
app.get(
  '/recommendations/top/:amount',
  recommendationController.getRecommendationAmount,
);

export default app;
