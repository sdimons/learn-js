//Сумма пользовательских чисел
document.getElementById("btnNumber1").addEventListener('click', function() {
    var num1 = Number(prompt('Введите число 1'));
    var num2 = Number(prompt('Введите число 2'));
    alert(num1 + num2);
});

//Почему 6.35.toFixed(1) == 6.3?
document.getElementById("btnNumber2").addEventListener('click', function() {
    alert(`toFixed(20) : ${6.35.toFixed(20)} / toFixed(1) : ${6.35.toFixed(1)}`);
    alert(`Math.round : ${Math.round(6.35 * 10) / 10}`);
});

//Ввод числового значения
function readNumber() {
    let input = '';
    do {
        input = prompt("Ведите число (выход - пустая строка)");
    }
    while (isNaN(input) && input !== null);
    return Number(input);
}
document.getElementById("btnNumber3").addEventListener('click', function() {
    alert(`Вы ввели число ${readNumber()}`);
});

//Бесконечный цикл по ошибке
document.getElementById("btnNumber4").addEventListener('click', function() {
    sum = 0;
    for(let i = 0; i < 10; i++) {
        sum += 0.2;
    }
    alert(`Сумма 10 значений 0.2 = ${sum.toFixed(20)}`);
});

//Случайное число от min до max
function random(min, max) {
    return min + Math.random()*(max - min);
}
document.getElementById("btnNumber5").addEventListener('click', function() {
    alert(`Случайные числа диапазона 1..5: ${random(1,5)} / ${random(1,5)} / ${random(1,5)}`);
});

//Случайное целое число от min до max
function randomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min));
}
document.getElementById("btnNumber6").addEventListener('click', function() {
    alert(`Случайные числа диапазона 1..5: ${randomInteger(1,5)} / ${randomInteger(1,5)} / ${randomInteger(1,5)}`);
});
