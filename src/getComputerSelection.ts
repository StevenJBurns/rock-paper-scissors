import { OPTIONS } from './constants.js';

export const getComputerSelection = () => {
  const randomIndex = Math.floor(Math.random() * (Object.values(OPTIONS).length));

  return Object.values(OPTIONS)[randomIndex];
};
