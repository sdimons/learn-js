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

function GetStringArray(input)
{
    let numbers = input.split(',');
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        arr.push(numbers[i].trim());
    }
    return arr;
}

//1. Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
    if (str === null) return '';
    let words = str.split('-');
    words = words.map(function(item, index) {
        item = item.trim();
        if (index > 0)
            return item.trim()[0].toUpperCase() + item.trim().slice(1);
        return item;
    });
    return words.join('');
}

document.getElementById("btnArrayMethod1").addEventListener('click', function () {
    //alert("Подробности в консоли");
    do {
        let input = prompt("Введите строку с дефисами");
        if (input != null) {
            alert(camelize(input));
        }
    }
    while(input != null);
});

//2. Фильтрация по диапазону
function filterRange(arr, a, b) {
    let result = arr.filter(function(item, index, array) {
        return (item >= a && item <= b);
      });
    return result;
}
document.getElementById("btnArrayMethod2").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите числа через запятую (для массива)");
        if (input != null) {
            const arr = GetNumberArray(input);
            let a = +prompt("Введите a");
            let b = +prompt("Введите b");
            let filtered = filterRange(arr, a, b);
            alert(`${filtered}`);
            alert(`${arr}`);
        }
    }
    while(input != null);
});

//3. Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
document.getElementById("btnArrayMethod3").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите числа через запятую (для массива)");
        if (input != null)
        {
            const arr = GetNumberArray(input);
            let a = +prompt("Введите a");
            let b = +prompt("Введите b");
            filterRangeInPlace(arr, a, b);
            alert(`${arr}`);
        }
    }
    while(input != null);
});

//4. Сортировать в обратном порядке
function compare(a, b) {
    if (a < b) return 1; // если первое значение меньше второго
    if (a == b) return 0; // если равны
    if (a > b) return -1; // если первое значение больше второго
  }
document.getElementById("btnArrayMethod4").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите числа через запятую (для массива)");
        if (input != null) {
            const arr = GetNumberArray(input);
            alert(`${arr.sort(compare)}`);
        }
    }
    while(input != null);
});

//5. Скопировать и отсортировать массив
function copySorted(arr) {
    return arr.slice(0).sort();
}
document.getElementById("btnArrayMethod5").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите массив строк через запятую (для массива)");
        if (input != null) {
            const arr = GetStringArray(input);
            alert(`copySorted(): ${copySorted(arr)}`);
            alert(`arr: ${arr}`);
        }
    }
    while(input != null);
});

//6. Создать расширяемый калькулятор
function Calculator() {
    
    this.methods = {
        "+" : function(a, b) {
            return a + b;
        },
        "-" : function(a, b) {
            return a - b;
        }
    }
    this.calculate = function (str) {
        if (str && str.length > 0) {
            let strings = str.split(' ');
            if (strings.length === 3) {
                if (strings[1] in this.methods) {
                    return this.methods[strings[1]](isFinite(strings[0]) ? Number(strings[0]) : 0, isFinite(strings[2]) ? Number(strings[2]) : 0);
                }
            }
        }
        return 'Неправильный формат строки или найдена операция';
    }
    this.addMethod = function(name, func) {
        if (!(name in this.methods)) {
            this.methods[name] = func;
        }
    }
}
document.getElementById("btnArrayMethod6").addEventListener('click', function () {
    let calc = new Calculator;
    let input = null;
    do{
        input = prompt('Введите строку типа (ЧИСЛО оператор ЧИСЛО) с пробелами (+,-,*,/,**)');
        if (input != null)
        {
            calc.addMethod("*", function(a, b) {return a * b;});
            calc.addMethod("/", function(a, b) {return a / b;});
            calc.addMethod("**", function(a, b) {return a ** b;});
            alert(calc.calculate(input));
        }
    }
    while(input != null);
});