const goTopBtn = document.querySelector('.go-to-top');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const offset = window.scrollY;
  const coords = document.documentElement.clientHeight;
  goTopBtn.classList.toggle('go-to-top--show', offset > coords);
}

function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75);
    requestAnimationFrame(goTop);
  }
}



