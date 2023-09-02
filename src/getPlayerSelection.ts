export const getPlayerSelection = (): string | undefined => {
  const gameOptionsSection: Element | null = document.querySelector('#gameOptionsSection');
  return `${gameOptionsSection?.getAttribute('data-player-selection')}` ?? undefined;
};
