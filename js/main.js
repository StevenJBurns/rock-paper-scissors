import { renderFieldsetOptions } from './renderFieldsetOptions.js';
import { getPlayerSelection } from './getPlayerSelection.js';
import { getComputerSelection } from './getComputerSelection.js';
import { checkForWinner } from './checkForWinner.js';

renderFieldsetOptions();

const playButton = document.querySelector('#playButton');

playButton.addEventListener('click', () => {
  const gameHistory = document.querySelector('#gameHistory');

  const winner = checkForWinner(getPlayerSelection(), getComputerSelection());

  const newHistoryNode = document.createElement('li');
  const newHistoryText = document.createTextNode(winner);

  newHistoryNode.appendChild(newHistoryText);
  gameHistory.appendChild(newHistoryNode);
});
