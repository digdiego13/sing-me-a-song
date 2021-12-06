import { mockRecommendationRepository } from './factories/mockFactory.js';
import { updateVote } from '../src/repositories/recommendationRepository.js';

const sut = updateVote;

describe('upvote unit test', () => {
  test('music id not found. Should return status 1', async () => {
    mockRecommendationRepository.updateVote({
      status: 1,
      message: 'this music doesnt exist in our recommendation List',
    });
    const result = await sut(1);
    expect(result).toEqual({
      status: 1,
      message: 'this music doesnt exist in our recommendation List',
    });
  });

  test('music found. Should return status 0', async () => {
    mockRecommendationRepository.updateVote({
      status: 0,
      message: 'Upvote done',
    });
    const result = await sut(1);
    expect(result).toEqual({
      status: 0,
      message: 'Upvote done',
    });
  });
});
