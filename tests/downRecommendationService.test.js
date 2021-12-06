import { mockRecommendationRepository } from './factories/mockFactory.js';
import { downdateVote } from '../src/repositories/recommendationRepository.js';

const sut = downdateVote;

describe('downVote unit test', () => {
  test('music id not found. Should return status 1', async () => {
    mockRecommendationRepository.downdateVote({
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
    mockRecommendationRepository.downdateVote({
      status: 0,
      message: 'Downvote done',
    });
    const result = await sut(1);
    expect(result).toEqual({
      status: 0,
      message: 'Downvote done',
    });
  });
});
