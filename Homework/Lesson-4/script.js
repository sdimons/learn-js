'use strict';

function highlight(table) {
   let tbody = table.tBodies[0];
   for(let row of tbody.rows) {
      let status = row.lastElementChild;
      if (status && status.hasAttribute('data-available')) {
         if (status.dataset.available === 'true') {
            row.className = 'available';
         } else {
            row.className = 'unavailable';
         }
      }
      else {
         row.hidden = 'hidden';
      }
      let gender = status.previousElementSibling;
      if (gender && gender.innerText === 'm') {
         row.classList.add('male');
      }
      if (gender && gender.innerText === 'f') {
         row.classList.add('female');
      }
      let age = gender.previousElementSibling;
      if (age && parseInt(age.innerText) < 18) {
         row.style.cssText = 'text-decoration: line-through';
      }

   }
}

highlight(document.querySelector('.js-teachers')); 

