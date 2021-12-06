export default function recommendationListFactory({
  biggerThan10,
  lessThan10,
  neither,
}) {
  if (biggerThan10) {
    return [
      {
        id: 1,
        name: 'Chitãozinho E Xororó - Evidências',
        youtubeLink:
          'https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO',
        score: 245,
      },
      {
        id: 2,
        name: 'Garota de Ipanema',
        youtubeLink: 'https://www.youtube.com/watch?v=wrqNCyXYuT0',
        score: 11,
      },
      {
        id: 3,
        name: 'Joe',
        youtubeLink:
          'https://www.youtube.com/watch?v=wrqNhttps://www.youtube.com/watch?v=5fjRqw8F1HsCyXYuT0',
        score: 10,
      },
    ];
  }
  if (lessThan10) {
    return [
      {
        id: 1,
        name: 'Chitãozinho E Xororó - Evidências',
        youtubeLink:
          'https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO',
        score: 5,
      },
      {
        id: 2,
        name: 'Garota de Ipanema',
        youtubeLink: 'https://www.youtube.com/watch?v=wrqNCyXYuT0',
        score: 4,
      },
      {
        id: 3,
        name: 'Joe',
        youtubeLink:
          'https://www.youtube.com/watch?v=wrqNhttps://www.youtube.com/watch?v=5fjRqw8F1HsCyXYuT0',
        score: -5,
      },
    ];
  }

  if (neither) {
    return [
      {
        id: 1,
        name: 'Chitãozinho E Xororó - Evidências',
        youtubeLink:
          'https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO',
        score: 11,
      },
      {
        id: 2,
        name: 'Garota de Ipanema',
        youtubeLink: 'https://www.youtube.com/watch?v=wrqNCyXYuT0',
        score: 15,
      },
      {
        id: 3,
        name: 'Joe',
        youtubeLink:
          'https://www.youtube.com/watch?v=wrqNhttps://www.youtube.com/watch?v=5fjRqw8F1HsCyXYuT0',
        score: 5,
      },
    ];
  }
}
