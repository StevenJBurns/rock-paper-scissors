import { OPTIONS, RESULTS } from './constants.js';

export const checkForWinner = (
  playerSelection: string | undefined,
  computerSelection: string | undefined
  ): string | undefined => {
  const [rock, paper, scissors] = Object.values(OPTIONS);
  const [tie, computer, player] = Object.values(RESULTS);

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
