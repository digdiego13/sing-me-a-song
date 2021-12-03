import connection from '../database/database.js';

async function selectMusicById(id) {
  const selectedMusicScore = await connection.query(
    `SELECT * FROM recommendation_list WHERE id = $1
  `,
    [Number(id)],
  );
  if (selectedMusicScore.rowCount === 0) {
    return undefined;
  }
  const { score } = selectedMusicScore.rows[0];
  console.log(score);
  return score;
}

async function insertRecommendation({ youtubeLink, name }) {
  const checkIfExistLink = await connection.query(
    `
    SELECT * FROM recommendation_list WHERE $1 = link `,
    [youtubeLink],
  );

  if (checkIfExistLink.rowCount > 0) {
    return {
      status: 1,
      message: 'Music already exist',
    };
  }
  await connection.query(
    `
    INSERT INTO recommendation_list (music_name, score, link, gender) VALUES ($1, $2, $3, $4)
    `,
    [name, 0, youtubeLink, 'generic'],
  );
  return {
    status: 0,
    message: 'ok',
  };
}

async function updateVote(id) {
  const score = await selectMusicById(id);
  if (score === undefined) {
    return {
      status: 1,
      message: 'this music doesnt exist in our recommendation List',
    };
  }
  await connection.query(
    `
    UPDATE recommendation_list SET score = $1 WHERE id = $2
  `,
    [score + 1, id],
  );
  return {
    status: 0,
    message: 'Upvote done',
  };
}

async function downdateVote(id) {
  const score = await selectMusicById(id);
  if (score === undefined) {
    return {
      status: 1,
      message: 'this music doesnt exist in our recommendation List',
    };
  }

  await connection.query(
    `
    UPDATE recommendation_list SET score = $1 WHERE id = $2
  `,
    [score - 1, id],
  );
  return {
    status: 0,
    message: 'Downvote done',
  };
}

export { insertRecommendation, updateVote, downdateVote };
