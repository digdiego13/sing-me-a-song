import { any, array } from 'joi';
import { getRecommendationMusicsAmount } from '../src/services/recommendationService.js';
import { mockRecommendationRepository } from './factories/mockFactory.js';
import recommendationListFactory from './factories/recommendationsListFactory.js';

const sut = getRecommendationMusicsAmount;

describe('getRecommendationMusicsAmount unit test', () => {
  test('return status 0 anyway', async () => {
    mockRecommendationRepository.selectrecommendation(
      recommendationListFactory({ neither: 1 }),
    );
    const result = await sut({ amount: 3 });
    expect(result).toEqual({
      status: 0,
      message: expect.any(Array),
    });
  });
});
