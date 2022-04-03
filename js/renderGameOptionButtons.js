import { OPTIONS } from './constants.js';
import { handleGameOptionButtonClick } from './handleGameOptionButtonClick.js';

const gameOptionsSection = document.querySelector('#gameOptionsSection');

export const renderGameOptionButtons = () => {
  OPTIONS.forEach(option => {
    const newButton = document.createElement('button');
    const newButtonTextNode = document.createTextNode(option);
    
    newButton.appendChild(newButtonTextNode);
    newButton.addEventListener('click', handleGameOptionButtonClick);
 
    gameOptionsSection.appendChild(newButton);
    gameOptionsSection.setAttribute('data-player-selection', undefined);
  });
};