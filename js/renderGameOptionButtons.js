import { OPTIONS } from './constants.js';
import { handleGameOptionButtonClick } from './handleGameOptionButtonClick.js';
var gameOptionsSection = document.querySelector('#gameOptionsSection');
export var renderGameOptionButtons = function () {
    Object.values(OPTIONS).forEach(function (option) {
        var newButton = document.createElement('button');
        var newButtonTextNode = document.createTextNode(option);
        newButton.appendChild(newButtonTextNode);
        newButton.addEventListener('click', handleGameOptionButtonClick);
        gameOptionsSection === null || gameOptionsSection === void 0 ? void 0 : gameOptionsSection.appendChild(newButton);
        gameOptionsSection === null || gameOptionsSection === void 0 ? void 0 : gameOptionsSection.setAttribute('data-player-selection', '');
    });
};
