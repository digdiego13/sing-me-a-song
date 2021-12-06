import * as recommendationRepository from '../../src/repositories/recommendationRepository.js';

const mockUpvote = jest.spyOn(recommendationRepository, 'updateVote');
const mockDownVote = jest.spyOn(recommendationRepository, 'downdateVote');
const mockSelect = jest.spyOn(recommendationRepository, 'selectrecommendation');
const mockInsert = jest.spyOn(recommendationRepository, 'insertRecommendation');

const mockRecommendationRepository = {
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
