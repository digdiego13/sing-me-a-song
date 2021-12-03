import postRecommendationSchema from '../schemas/postRecommendationSchema.js';
import * as recommendationServices from '../services/recommendationService.js';

async function postRecommendation(req, res) {
  // eslint-disable-next-line object-curly-newline
  const { name, youtubeLink } = req.body;
  const isCorrectBody = postRecommendationSchema.validate(req.body);
  console.log('leu');
  if (isCorrectBody.error) {
    return res.status(400).send(`${isCorrectBody.error.details[0].message}`);
  }
  try {
    const insertRecommendation = await recommendationServices.postRecommendationService({
        youtubeLink,
        name,
      });
    console.log(insertRecommendation);
    if (insertRecommendation.status === 1) {
      return res.status(401).send(insertRecommendation.message);
    }
    if (insertRecommendation.status === 2) {
      return res.status(401).send(insertRecommendation.message);
    }
    return res.status(200).send(insertRecommendation.message);
  } catch (erro) {
    return res.status(500);
  }
}

export { postRecommendation };
