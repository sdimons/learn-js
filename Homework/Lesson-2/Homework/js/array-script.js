//1. Скопирован ли массив?
document.getElementById("btnArray1").addEventListener('click', function () {
    let fruits = ["Яблоки", "Груша", "Апельсин"];

    // добавляем новое значение в "копию"
    let shoppingCart = fruits;
    shoppingCart.push("Банан");

    // что в fruits?
    alert(`Копируются ссылки на массив, а не сами значения. fruits.length =  4`);
    alert( fruits.length ); // Копируются ссылки на массив, а не сами значения. fruits.length =  4
});

//2. Операции с массивами
document.getElementById("btnArray2").addEventListener('click', function () {
    alert("Подробности в консоли");
    const styles = ["Джаз", "Блюз"];
    console.log(styles);
    styles.push("Рок-н-ролл");
    console.log(styles);
    const middle = Math.floor(styles.length / 2);
    if (middle > 0 && middle < styles.length) {
        styles[middle] = "Классика";
    }
    console.log(styles);
    let deletedElement = styles.shift();
    console.log(styles);
    styles.unshift("Рэп", "Регги");
    console.log(styles);
});

//3. Вызов в контексте массива
document.getElementById("btnArray3").addEventListener('click', function () {
    let arr = ["a", "b"];
    arr.push(function() {
        alert( this );
    });
    alert("будет вазвана функция");
    arr[2]();
});

//4. Сумма введённых чисел
function sumInput() {
    let input = "";
    let sum = 0;
    do {
        input = prompt("Введите число");
        if (isFinite(input)){
            sum += Number(input);
        }

    } while(input !== null && isFinite(input));
    return sum;
}
document.getElementById("btnArray4").addEventListener('click', function () {
    alert(`Сумма введенных чисел = ${sumInput()}`);
});

//5. Подмассив наибольшей суммы
function getMaxSubSum(arr) {
    let maxArr = [];
    debugger;
    let maxSum = Math.min(...arr);
    
    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr[i];
        let currentArr = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (currentSum + arr[j] > currentSum) {
                currentSum += arr[j];
                currentArr.push(arr[j]);
            }
            else {
                break;
            }
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxArr = currentArr;
        }
    }
    return { maxArr, maxSum};
}
document.getElementById("btnArray5").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите числа через запятую (для массива)");
        let numbers = input.split(',');
        const arr = [];
        for(let i = 0; i < numbers.length; i++){
            if (isFinite(numbers[i].trim()))
                arr.push(Number(numbers[i].trim()));
        }
        const maxLengthArr = getMaxSubSum(arr);
        alert(`Подмассив наибольшей длины [${maxLengthArr.maxArr.join(', ')}] (=${maxLengthArr.maxSum})`);
    } while(input != null);
});