import { OPTIONS, RESULTS } from './constants.js';
export var checkForWinner = function (playerSelection, computerSelection) {
    var _a = Object.values(OPTIONS), rock = _a[0], paper = _a[1], scissors = _a[2];
    var _b = Object.values(RESULTS), tie = _b[0], computer = _b[1], player = _b[2];
    if (playerSelection === computerSelection)
        return tie;
    switch (playerSelection) {
        case rock:
            return computerSelection === paper ? computer : player;
        case paper:
            return computerSelection === rock ? player : computer;
        case scissors:
            return computerSelection === paper ? player : computer;
        default:
            return undefined;
    }
    ;
};
