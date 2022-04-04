import { RESULTS } from './constants.js'
import { getPlayerSelection } from './getPlayerSelection.js';
import { getComputerSelection } from './getComputerSelection.js';
import { checkForWinner } from './checkForWinner.js';

export const handleGameOptionButtonClick = e => {
  const { currentTarget, currentTarget: { parentNode }} = e;
  const [player, computer, tie] = RESULTS;

  parentNode.setAttribute('data-player-selection', currentTarget.innerHTML);

  const winner = checkForWinner(getPlayerSelection(), getComputerSelection());

  const winsCell = document.querySelector('#cell-wins');
  const lossCell = document.querySelector('#cell-loss');
  const tiesCell = document.querySelector('#cell-ties');

  switch (winner) {
    case player:
      winsCell.innerHTML = +(++winsCell.innerHTML);
      return;
    case computer:
      lossCell.innerHTML = +(++lossCell.innerHTML);
      return;
    case tie:
      tiesCell.innerHTML = +(++tiesCell.innerHTML);
      return;
    default:
      return;
  }
};
