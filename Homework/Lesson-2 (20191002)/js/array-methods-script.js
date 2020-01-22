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

//7. Трансформировать в массив имён
document.getElementById("btnArrayMethod7").addEventListener('click', function () {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];
    let names = users.map(item => item.name);
    alert(`[ vasya, petya, masha ] -> ${names}`);
});

//8. Трансформировать в объекты
document.getElementById("btnArrayMethod8").addEventListener('click', function () {
    let vasya = {
        name: "Вася",
        surname: "Пупкин",
        id: 1
    };
    let petya = {
        name: "Петя",
        surname: "Иванов",
        id: 2
    };
    let masha = {
        name: "Маша",
        surname: "Петрова",
        id: 3
    };

    let users = [vasya, petya, masha];

    let usersMapped = users.map(item => { return { id: item.id, fullName: `${item.name} ${item.surname}`}} );

    alert(usersMapped[0].id) // 1
    alert(usersMapped[0].fullName) // Вася Пупкин
    console.log(users);
    console.log(usersMapped);
});

//9. Отсортировать пользователей по возрасту
function sortByAge(users) {
    users.sort((a, b) => {
        if (a.age > b.age) return 1; // если первое значение больше второго
        if (a.age == b.age) return 0; // если равны
        if (a.age < b.age) return -1; // если первое значение меньше второго
    });
}
document.getElementById("btnArrayMethod9").addEventListener('click', function () {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

    sortByAge(arr);

    // теперь: [vasya, masha, petya]
    alert(arr[0].name); // Вася
    alert(arr[1].name); // Маша
    alert(arr[2].name); // Петя
});

//10. Перемешайте массив
function shuffle(array) {
    return array.sort((a, b) => {
        //return Math.random() * (max - min) + min
        return Math.random() * (1 - (-1)) + (-1);
    });
}
document.getElementById("btnArrayMethod10").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите массив чисел через запятую (для массива)");
        if (input != null) {
            const arr = GetNumberArray(input);
            alert(`Перемешанный массив: ${shuffle(arr)}`);
        }
    }
    while(input != null);
});

//11. Получить средний возраст
function getAverageAge(users) {
    /*
    let value = arr.reduce(function(previousValue, item, index, array) {
        // ...
    }, [initial]);
    */
    if (users != null && users.length > 0)
    {
        let result = users.reduce((sum, current) => sum + current, 0);
        return result / users.length;
    }
    return "Пустой массив";
}
document.getElementById("btnArrayMethod11").addEventListener('click', function () {
    let input = null;
    do {
        input = prompt("Введите массив чисел через запятую (для массива)");
        if (input != null) {
            const ages = GetNumberArray(input);
            alert(`Средний возраст: ${getAverageAge(ages)}`);
        }
    }
    while(input != null);
});

//12. Оставить уникальные элементы массива
function unique(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
document.getElementById("btnArrayMethod12").addEventListener('click', function () {
    let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"];
    alert(unique(strings));
});