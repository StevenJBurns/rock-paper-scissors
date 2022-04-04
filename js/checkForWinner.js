import { OPTIONS, RESULTS } from './constants.js';

export const checkForWinner = (playerSelection, computerSelection) => {
  if (!OPTIONS.includes(playerSelection) || !OPTIONS.includes(computerSelection))
    throw new Error('Someone didn\'t select');

  const [rock, paper, scissors] = OPTIONS;
  const [tie, computer, player] = RESULTS;

  if (playerSelection === computerSelection) return tie;
  
  switch (playerSelection) {
    case rock:
      return computerSelection === paper ? computer : player;
    case paper:
      return computerSelection === rock ? player : computer;
    case scissors:
      return computerSelection === paper ? player : computer;
    default:
      return undefined;
  };
};
