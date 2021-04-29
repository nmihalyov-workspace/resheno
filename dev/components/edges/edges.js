Array.from(document.querySelectorAll('.edges__item')).map(el => {
  el.addEventListener('click', el => {
    const $el = el.currentTarget;

    if ($el.classList.contains('edges__item--active')) {
      $el.classList.remove('edges__item--active');
    } else {
      if (document.querySelector('.edges__item--active')) {
        document.querySelector('.edges__item--active').classList.remove('edges__item--active');
      }
      $el.classList.add('edges__item--active');
    }
  });
});