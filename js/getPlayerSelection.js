export const getPlayerSelection = () => {
  return `${document.querySelector('#gameOptionsSection').getAttribute('data-player-selection')}`;
};
