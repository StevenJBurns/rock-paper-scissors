export const getPlayerSelection = () => {
  return `${document.querySelector('input[name=gameOptions]:checked').value}`;
};
