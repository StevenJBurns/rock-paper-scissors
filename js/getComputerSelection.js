import { OPTIONS } from './constants.js';

export const getComputerSelection = () => {
  const randomIndex = Math.floor(Math.random() * (OPTIONS.length));

  return OPTIONS[randomIndex];
};
