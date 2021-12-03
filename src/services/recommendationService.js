import * as recommendationRepository from '../repositories/recommendationRepository.js';

function isYoutubeLink({ youtubeLink }) {
  const p =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (youtubeLink.match(p)) {
    console.log('func yt');
    return true;
  }
  return false;
}

async function postRecommendationService({ youtubeLink, name }) {
  const ytLinkTrue = isYoutubeLink({ youtubeLink });
  if (!ytLinkTrue) {
    return {
      status: 1,
      message: 'not a youtube Link',
    };
  }
  const insertedRecommendation =
    await recommendationRepository.insertRecommendation({ youtubeLink, name });

  if (insertedRecommendation.status === 1) {
    return {
      status: 2,
      message: insertedRecommendation.message,
    };
  }
  return {
    status: 0,
    message: 'music inserted',
  };
}

export { postRecommendationService };