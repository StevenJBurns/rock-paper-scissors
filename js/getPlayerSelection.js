export var getPlayerSelection = function () {
    var _a;
    var gameOptionsSection = document.querySelector('#gameOptionsSection');
    return (_a = "".concat(gameOptionsSection === null || gameOptionsSection === void 0 ? void 0 : gameOptionsSection.getAttribute('data-player-selection'))) !== null && _a !== void 0 ? _a : undefined;
};
