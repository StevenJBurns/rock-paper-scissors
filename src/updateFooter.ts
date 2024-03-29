export const updateFooter = () => {
  const footer_h4 = document.querySelector('footer h4');

  if (!footer_h4) {
    console.warn('footer h4 element not found');
    return;
  }

  footer_h4.innerHTML = `&copy; ${new Date().getFullYear()}`;
};
