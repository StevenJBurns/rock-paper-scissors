import { RESULTS } from './constants.js';
import { getPlayerSelection } from './getPlayerSelection.js';
import { getComputerSelection } from './getComputerSelection.js';
import { checkForWinner } from './checkForWinner.js';
export var handleGameOptionButtonClick = function (e) {
    var currentTarget = e.currentTarget, parentNode = e.currentTarget.parentNode;
    var _a = Object.values(RESULTS), player = _a[0], computer = _a[1], tie = _a[2];
    parentNode.setAttribute('data-player-selection', currentTarget.innerHTML);
    var winner = checkForWinner(getPlayerSelection(), getComputerSelection());
    var winsCell = document.querySelector('#cell-wins');
    var lossCell = document.querySelector('#cell-loss');
    var tiesCell = document.querySelector('#cell-ties');
    var incrementCellValue = function (cell) {
        if (!cell)
            throw new Error('an HTML cell does not exit');
        var innerHTML = cell.innerHTML;
        var value = +innerHTML;
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
