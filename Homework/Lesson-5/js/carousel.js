// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
const carousel = document.querySelector('ul');
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

// ...ваш код, который сделает карусель рабочей
