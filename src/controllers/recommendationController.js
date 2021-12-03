import postRecommendationSchema from '../schemas/postRecommendationSchema.js';
import * as recommendationServices from '../services/recommendationService.js';

async function postRecommendation(req, res) {
  // eslint-disable-next-line object-curly-newline
  const { name, youtubeLink } = req.body;
  const isCorrectBody = postRecommendationSchema.validate(req.body);
  if (isCorrectBody.error) {
    return res.status(400).send(`${isCorrectBody.error.details[0].message}`);
  }
  try {
    const insertRecommendation =
      await recommendationServices.postRecommendationService({
        youtubeLink,
        name,
      });
    if (insertRecommendation.status === 1) {
      return res.status(401).send(insertRecommendation.message);
    }
    if (insertRecommendation.status === 2) {
      return res.status(401).send(insertRecommendation.message);
    }
    return res.status(201).send(insertRecommendation.message);
  } catch (erro) {
    return res.status(500);
  }
}

async function upRecommendations(req, res) {
  const { id } = req.params;
  try {
    const upvote = await recommendationServices.upRecommendationService(id);
    if (upvote.status === 1) {
      return res.status(403).send(upvote.message);
    }
    return res.sendStatus(200);
  } catch (erro) {
    return res.sendStatus(500);
  }
}

export { postRecommendation, upRecommendations };
