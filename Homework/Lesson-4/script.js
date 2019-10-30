'use strict';

function highlight(table) {
  console.log(table);
  
  let tbody = table.getElementsByTagName('tbody')[0];
  let trs = tbody.getElementsByTagName('tr');

 let a = 0;
 for (let item in trs) {
     a++;
     consolelog(a);
     console.log(trs[item].cells[3]);
 }
  console.log(trs);
}

highlight(document.querySelector('.js-teachers')); 

