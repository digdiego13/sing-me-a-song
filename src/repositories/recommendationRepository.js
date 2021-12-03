import connection from '../database/database.js';

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

export { insertRecommendation };
