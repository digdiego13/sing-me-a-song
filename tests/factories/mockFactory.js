import * as recommendationRepository from '../../src/repositories/recommendationRepository.js';

const mockMathRound = jest.spyOn(global.Math, 'round');
const mockMathRandom = jest.spyOn(global.Math, 'random');
const mockUpvote = jest.spyOn(recommendationRepository, 'updateVote');
const mockDownVote = jest.spyOn(recommendationRepository, 'downdateVote');
const mockSelect = jest.spyOn(recommendationRepository, 'selectrecommendation');
const mockInsert = jest.spyOn(recommendationRepository, 'insertRecommendation');

const mockRecommendationRepository = {
  round: (valueToBeReturned) =>
    mockMathRound.mockImplementationOnce(() => valueToBeReturned),
  random: (valueToBeReturned) =>
    mockMathRandom.mockImplementationOnce(() => valueToBeReturned),
  updateVote: (valueToBeReturned) =>
    mockUpvote.mockImplementationOnce(() => valueToBeReturned),
  downdateVote: (valueToBeReturned) =>
    mockDownVote.mockImplementationOnce(() => valueToBeReturned),
  selectrecommendation: (valueToBeReturned) =>
    mockSelect.mockImplementationOnce(() => valueToBeReturned),
  insertRecommendation: (valueToBeReturned) =>
    mockInsert.mockImplementationOnce(() => valueToBeReturned),
};

export { mockRecommendationRepository };
