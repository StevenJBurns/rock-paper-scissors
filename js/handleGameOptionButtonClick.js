import { getPlayerSelection } from './getPlayerSelection.js';
import { getComputerSelection } from './getComputerSelection.js';
import { checkForWinner } from './checkForWinner.js';

export const handleGameOptionButtonClick = e => {
  const { currentTarget, currentTarget: { parentNode }} = e;

  parentNode.setAttribute('data-player-selection', currentTarget.innerHTML);

  const winner = checkForWinner(getPlayerSelection(), getComputerSelection());
  console.log(winner);
};
