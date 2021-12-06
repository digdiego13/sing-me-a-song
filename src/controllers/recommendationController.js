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
      return res.status(400).send(insertRecommendation.message);
    }
    if (insertRecommendation.status === 2) {
      return res.status(400).send(insertRecommendation.message);
    }
    return res.status(201).send(insertRecommendation.message);
  } catch (erro) {
    return res
      .status(500)
      .send('insert recommendation failed due to server error.');
  }
}

async function upRecommendations(req, res) {
  const { id } = req.params;
  try {
    const upvote = await recommendationServices.upRecommendationService(id);
    if (upvote.status === 1) {
      return res.status(404).send(upvote.message);
    }
    return res.sendStatus(200);
  } catch (erro) {
    return res.status(500).send('up vote failed due to server error');
  }
}

async function downRecommendations(req, res) {
  const { id } = req.params;
  try {
    const downvote = await recommendationServices.downRecommendationService(id);
    if (downvote.status === 1) {
      return res.status(404).send(downvote.message);
    }
    return res.sendStatus(200);
  } catch (erro) {
    return res.status(500).send('Down vote failed due to server error');
  }
}

async function getRecommendation(req, res) {
  try {
    const musicRecommended =
      await recommendationServices.getRecommendationMusic();
    if (musicRecommended.status === 1) {
      return res.status(404).send(musicRecommended.message);
    }
    return res.status(200).send(musicRecommended.message);
  } catch (erro) {
    return res
      .status(500)
      .send('get recommendation failed due to server error');
  }
}

async function getRecommendationAmount(req, res) {
  try {
    const { amount } = req.params;

    if (!Number(amount)) {
      return res.sendStatus(400);
    }
    const musicRecommended =
      await recommendationServices.getRecommendationMusicsAmount({ amount });

    return res.status(200).send(musicRecommended.message);
  } catch (erro) {
    return res.status(500).send('get amount failed due to server error');
  }
}

export {
  postRecommendation,
  upRecommendations,
  downRecommendations,
  getRecommendation,
  getRecommendationAmount,
};
