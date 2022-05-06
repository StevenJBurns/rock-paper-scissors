import { RESULTS } from './enums/results.js'
import { getPlayerSelection } from './getPlayerSelection.js';
import { getComputerSelection } from './getComputerSelection.js';
import { checkForWinner } from './checkForWinner.js';

export const handleGameOptionButtonClick = (e: any) => {
  const { currentTarget, currentTarget: { parentNode }} = e;
  const [player, computer, tie] = Object.values(RESULTS);

  parentNode.setAttribute('data-player-selection', currentTarget.innerHTML);

  const winner = checkForWinner(getPlayerSelection(), getComputerSelection());

  const winsCell: Element | null = document.querySelector('#cell-wins');
  const lossCell: Element | null = document.querySelector('#cell-loss');
  const tiesCell: Element | null = document.querySelector('#cell-ties');

  const incrementCellValue = (cell: Element | null): void => {
    if (!cell) throw new Error('an HTML cell does not exit');

    let { innerHTML } = cell;
    let value = +innerHTML;

    cell.innerHTML = (++value).toString();
  };

  switch (winner) {
    case player:
      incrementCellValue(winsCell);
      return;
    case computer:
      incrementCellValue(lossCell);
      return;
    case tie:
      incrementCellValue(tiesCell);
      return;
    default:
      return;
  }
};
