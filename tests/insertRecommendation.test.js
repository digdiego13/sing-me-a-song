import { postRecommendationService } from '../src/services/recommendationService.js';
import { mockRecommendationRepository } from './factories/mockFactory.js';
const sut = postRecommendationService;

describe('post Recommendation unit test', () => {
  test('insert with wrong Youtube link, should return status 1', async () => {
    const body = {
      name: 'Falamansa',
      youtubeLink: 'wrong youtubeLink',
    };
    const result = await sut(body);
    expect(result).toEqual({
      status: 1,
      message: 'not a youtube Link',
    });
  });

  test('insert music, should return status 0', async () => {
    mockRecommendationRepository.insertRecommendation({
      status: 0,
      message: 'ok',
    });
    const body = {
      name: 'Falamansa',
      youtubeLink: 'https://www.youtube.com/watch?v=chwyjJbcs1Y',
    };
    const result = await sut(body);
    expect(result).toEqual({
      status: 0,
      message: 'music inserted',
    });
  });

  test('insert repeated music, should return status 2', async () => {
    mockRecommendationRepository.insertRecommendation({
      status: 1,
      message: 'Music already exist',
    });
    const body = {
      name: 'Falamansa',
      youtubeLink: 'https://www.youtube.com/watch?v=chwyjJbcs1Y',
    };
    const result = await sut(body);
    expect(result).toEqual({
      status: 2,
      message: 'Music already exist',
    });
  });
});
