import { mockRecommendationRepository } from './factories/mockFactory.js';
import * as recommendationService from '../src/services/recommendationService.js';
import recommendationListFactory from './factories/recommendationsListFactory.js';

const sut = recommendationService.getRecommendationMusic;

describe('getRecommendationMusic unit test', () => {
  test('music id not found. Should return status 1', async () => {
    mockRecommendationRepository.selectrecommendation([]);
    const result = await sut();
    expect(result).toEqual({
      status: 1,
      message: 'There is no recommendation music',
    });
  });

  test('only musics with score bigger than 10', async () => {
    mockRecommendationRepository.random(0.7);

    mockRecommendationRepository.selectrecommendation(
      recommendationListFactory({ biggerThan10: 1 }),
    );
    mockRecommendationRepository.round(0);
    const result = await sut();
    expect(result).toEqual(
      expect.objectContaining({
        status: 0,
        message: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          youtubeLink: expect.stringContaining('youtube.com/watch?'),
          score: expect.any(Number),
        }),
      }),
    );
    expect(result.message.score).toBeGreaterThan(10);
  });
  test('only musics with score less than 10', async () => {
    mockRecommendationRepository.random(0.7);

    mockRecommendationRepository.selectrecommendation(
      recommendationListFactory({ lessThan10: 1 }),
    );
    mockRecommendationRepository.round(0);
    const result = await sut();
    expect(result).toEqual(
      expect.objectContaining({
        status: 0,
        message: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          youtubeLink: expect.stringContaining('youtube.com/watch?'),
          score: expect.any(Number),
        }),
      }),
    );
    expect(result.message.score).toBeLessThan(10);
  });
  test('music with all scores AND random being 0.7', async () => {
    mockRecommendationRepository.random(0.7);

    mockRecommendationRepository.selectrecommendation(
      recommendationListFactory({ neither: 1 }),
    );
    mockRecommendationRepository.round(0);
    const result = await sut();
    expect(result).toEqual(
      expect.objectContaining({
        status: 0,
        message: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          youtubeLink: expect.stringContaining('youtube.com/watch?'),
          score: expect.any(Number),
        }),
      }),
    );
    expect(result.message.score).toBeGreaterThan(10);
  });

  test('music with all scores AND random being 0.8', async () => {
    mockRecommendationRepository.random(0.8);

    mockRecommendationRepository.selectrecommendation(
      recommendationListFactory({ neither: 1 }),
    );
    mockRecommendationRepository.round(0);
    const result = await sut();
    expect(result).toEqual(
      expect.objectContaining({
        status: 0,
        message: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          youtubeLink: expect.stringContaining('youtube.com/watch?'),
          score: expect.any(Number),
        }),
      }),
    );
    expect(result.message.score).toBeGreaterThan(10);
  });
  test('music with all scores AND random being 0.6', async () => {
    mockRecommendationRepository.random(0.6);

    mockRecommendationRepository.selectrecommendation(
      recommendationListFactory({ neither: 1 }),
    );
    mockRecommendationRepository.round(0);
    const result = await sut();
    expect(result).toEqual(
      expect.objectContaining({
        status: 0,
        message: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          youtubeLink: expect.stringContaining('youtube.com/watch?'),
          score: expect.any(Number),
        }),
      }),
    );
    expect(result.message.score).toBeLessThan(10);
  });
});
