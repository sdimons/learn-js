'use strict';

//deepEqual(a, b)
function deepEqual(a, b) {
  return false;
}
document.getElementById("btnDeepEqual").addEventListener('click', function() {
  let a = {
    name: 'Misha',
    order: {
      price: 20
    },
  };
  console.log(a);
  let b = {
    name: 'Misha',
    order: {
      price: 20,
    }
  };
  console.log(b);
  console.log(`Результат a === b : ${a === b}`);
  let result = deepEqual(a, b);
  console.log(`Результат deepEqual(a, b): ${result}`);
  alert(`Результат deepEqual(a, b): ${result}. Подробности в консоли`);
});