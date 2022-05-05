import { OPTIONS } from './constants.js';
export var getComputerSelection = function () {
    var randomIndex = Math.floor(Math.random() * (Object.values(OPTIONS).length));
    return Object.values(OPTIONS)[randomIndex];
};
