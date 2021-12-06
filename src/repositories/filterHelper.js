export default function filterHelper({ amount, randoness }) {
  let baseQuery = ' SELECT * FROM recommendation_list';
  const preparedValues = [];
  if (amount) {
    preparedValues.push(amount);
    baseQuery += ` ORDER BY score DESC LIMIT $${preparedValues.length}`;
  }
  if (randoness) {
    if (randoness >= 70) {
      baseQuery += ' WHERE score >10';
    }
    if (randoness < 10) {
      baseQuery += ' WHERE score BETWEEN -5 AND 10';
    }
    baseQuery += ' ORDER BY randon() DESC LIMIT 1';
  }
  baseQuery += ';';
  console.log(baseQuery);
  return {
    baseQuery,
    preparedValues,
  };
}
