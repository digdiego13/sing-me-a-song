import { Router } from 'express';
import * as recommendationController from '../controllers/recommendationController.js';

const router = new Router();

router.post('', recommendationController.postRecommendation);
router.post('/:id/upvote', recommendationController.upRecommendations);
router.post('/:id/downvote', recommendationController.downRecommendations);

router.get('/random', recommendationController.getRecommendation);
router.get('/top/:amount', recommendationController.getRecommendationAmount);

export default router;
