//1. Фильтрация уникальных элементов массива
function unique(arr) {
    let set = new Set();
    for (let value of arr) {
        set.add(value);
    }
    let result = [];
    for (let value of set) {
        result.push(value);
    }
    return result;
}
document.getElementById("btnMapSet1").addEventListener('click', function () {
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( `values: ${values}\n` +
        `unique(values): ${unique(values)}` ); // Hare, Krishna, :-O
});

//2. Отфильтруйте анаграммы
function aclean(arr) {
    let map = new Map();
    for (let value of arr) {
        let newKey = value.toLowerCase().split('').sort().join('');
        if (!map.has(newKey)) {
            map.set(newKey, value);
        }
    }
    let result = [];
    for (let value of map.values()) {
        result.push(value);
      }
    return result;
}
document.getElementById("btnMapSet2").addEventListener('click', function () {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    alert( `arr: ${arr}\n` +
        `aclean(arr): ${aclean(arr)}` ); // "nap,teachers,ear" or "PAN,cheaters,era"
});

//3. Перебираемые ключи
document.getElementById("btnMapSet3").addEventListener('click', function () {
    let map = new Map();

    map.set("name", "John");

    let keys = Array.from(map.keys());
    alert(`typeof: ${typeof keys}\nisArray: ${Array.isArray(keys)}`);
    keys.push("more");
    alert(keys);
});