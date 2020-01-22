/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');
const imageWidth = 130;
const imageVisibleCount = 3;
const ul = carousel.querySelector('ul');
const ulItems = carousel.querySelectorAll('li');
let currentPosition = 0; // положение ленты прокрутки

//сдвин вправо
next.addEventListener('click', () => {
  currentPosition -= imageWidth * imageVisibleCount;
  let shift = (ulItems.length - imageVisibleCount) * imageWidth * (-1);
  if (currentPosition < shift) {
    currentPosition = shift;
  }
  ul.style.marginLeft = currentPosition + 'px';
});

//сдвиг влево
prev.addEventListener('click', () => {
  currentPosition += imageWidth * imageVisibleCount;
  if (currentPosition > 0) {
    currentPosition = 0;
  }
  ul.style.marginLeft = currentPosition + 'px';
});






