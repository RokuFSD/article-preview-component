const share = document.querySelector('.card__share');
const btn = document.querySelector('.share-btn');
const author = document.querySelector('.card__author');

console.log(btn);

btn.addEventListener('click', () => {

  btn.classList.toggle('share-btn--active');
  share.classList.toggle('card__share--show');

})

