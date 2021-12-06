import * as recommendationRepository from '../repositories/recommendationRepository.js';

function isYoutubeLink({ youtubeLink }) {
  const p =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (youtubeLink.match(p)) {
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

async function upRecommendationService(id) {
  const upgratedVote = await recommendationRepository.updateVote(id);

  if (upgratedVote.status === 1) {
    return {
      status: 1,
      message: upgratedVote.message,
    };
  }
  return {
    status: 0,
    message: upgratedVote.message,
  };
}

async function downRecommendationService(id) {
  const updatedVote = await recommendationRepository.downdateVote(id);

  if (updatedVote.status === 1) {
    return {
      status: 1,
      message: updatedVote.message,
    };
  }
  return {
    status: 0,
    message: updatedVote.message,
  };
}

async function getRecommendationMusic() {
  const randoness = Math.random();
  const recommendations = await recommendationRepository.selectrecommendation(
    {},
  );
  if (recommendations.length === 0) {
    return {
      status: 1,
      message: 'There is no recommendation music',
    };
  }

  const biggerThan10 = recommendations.filter((elem) => elem.score >= 10);
  const lessThan10 = recommendations.filter((elem) => elem.score < 10);
  console.log(recommendations[randoness * recommendations.length]);

  if (
    (biggerThan10.length === 0 && lessThan10.length !== 0) ||
    (biggerThan10.length !== 0 && lessThan10.length === 0)
  ) {
    return {
      status: 0,
      message: recommendations[Math.round(randoness * recommendations.length)],
    };
  }
  if (randoness >= 0.7) {
    return {
      status: 0,
      message: biggerThan10[Math.round(randoness * biggerThan10.length)],
    };
  }
  return {
    status: 0,
    message: lessThan10[Math.round(randoness * lessThan10.length)],
  };
}

async function getRecommendationMusicsAmount({ amount }) {
  const recommendationList =
    await recommendationRepository.selectrecommendation({ amount });
  return {
    status: 0,
    message: recommendationList,
  };
}

export {
  postRecommendationService,
  upRecommendationService,
  downRecommendationService,
  getRecommendationMusic,
  getRecommendationMusicsAmount,
};
