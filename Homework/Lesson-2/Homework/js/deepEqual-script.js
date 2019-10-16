'use strict';

//deepEqual(a, b)
function deepEqual(a, b) {
  let flag = true;
  let keys_a = Object.keys(a);
  let keys_b = Object.keys(b);
  
  for (let prop in a) {
    if (keys_a.includes(prop) && keys_b.includes(prop)) {
      if (typeof a[prop] == 'object' && typeof b[prop] == 'object') {
          flag = deepEqual(a[prop], b[prop]);
      } else if (a[prop] != b[prop])
        flag = false;       
    } else
      flag = false;
  }
  //В b могут быть свойства, которых нет в a, поэтому проверяем
  for (let i = 0; i < keys_b.length && flag; i++) {
    if (!keys_a.includes(keys_b[i])) {
      flag = false;
    }
  }
  return flag;
}
document.getElementById("btnDeepEqual").addEventListener('click', function () {
  let a = {
    name: 'Misha',
    order: {
      price: 20,
      sex: 2
    },
  };
  console.log(a);
  let b = {
    name: 'Misha',
    order: {
      price: 20,
      sex: 1
    }
  };
  console.log(b);
  console.log(`Результат a === b : ${a === b}`);
  debugger;
  let result = deepEqual(a, b);
  console.log(`Результат deepEqual(a, b): ${result}`);
  alert(`Результат deepEqual(a, b): ${result}. Подробности в консоли`);
});