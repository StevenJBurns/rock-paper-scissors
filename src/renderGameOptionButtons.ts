import { OPTIONS } from './constants.js';
import { handleGameOptionButtonClick } from './handleGameOptionButtonClick.js';

const gameOptionsSection: Element | null = document.querySelector('#gameOptionsSection');

export const renderGameOptionButtons = () => {
  Object.values(OPTIONS).forEach(option => {
    const newButton = document.createElement('button');
    const newButtonTextNode = document.createTextNode(option);
    
    newButton.appendChild(newButtonTextNode);
    newButton.addEventListener('click', handleGameOptionButtonClick);
 
    gameOptionsSection?.appendChild(newButton);
    gameOptionsSection?.setAttribute('data-player-selection', '');
  });
};