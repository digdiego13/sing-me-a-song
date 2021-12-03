import Joi from 'joi';

const postRecommendationSchema = Joi.object().keys({
  name: Joi.string().min(1).max(30).required(),
  youtubeLink: Joi.string().min(5).max(200).required(),
});

export default postRecommendationSchema;
