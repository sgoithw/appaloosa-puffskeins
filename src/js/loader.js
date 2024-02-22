export const loader = {
  element: document.querySelector('.loader'),
  create() {
    this.element.classList.add('loader-active');
  },
  destroy() {
    this.element.classList.remove('loader-active');
  },
};
