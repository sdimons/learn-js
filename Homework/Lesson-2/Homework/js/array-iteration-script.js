//0. Вспомогательная функция для получение массива из строки
function GetNumberArray(input)
{
    let numbers = input.split(',');
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isFinite(numbers[i].trim()))
            arr.push(Number(numbers[i].trim()));
    }
    return arr;
}

//1. Перепишите цикл через map
document.getElementById("btnArrayIteration1").addEventListener('click', function () {
    let arr = ["Есть", "жизнь", "на", "Марсе"];

    // var arrLength = [];
    // for (var i = 0; i < arr.length; i++) {
    //     arrLength[i] = arr[i].length;
    // }
    let arrLength = arr.map((item) => item.length);

    alert(`["Есть", "жизнь", "на", "Марсе"] -> ${arrLength}`); // 4,5,2,5
});

//2. Массив частичных сумм
function getSums(arr) {
    return arr.map((item, index, array) => array.slice(0, index + 1).reduce((sum, item) => sum += item, 0));
}
document.getElementById("btnArrayIteration2").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите массив чисел через запятую (для массива)");
        if (input != null) {
            const arr = GetNumberArray(input);
            alert(getSums(arr));
        }
    }
    while(input != null);
});