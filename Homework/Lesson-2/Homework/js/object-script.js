//1. Привет, object
document.getElementById("btnObject1").addEventListener('click', function() {
    alert(`Подробности в консоли`);
    let user = {};
    console.log(user);
    user.name = 'John';
    user.sirname = 'Smith';
    console.log(user);
    user["name"] = 'Pete';
    console.log(user);
    delete user.name;
    console.log(user);
});

//2. Проверка на пустоту
function isEmpty(obj) {
    return (Object.keys(obj) || {}).length > 0; 
}

document.getElementById("btnObject2").addEventListener('click', function() {
    let schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false
});

//3. Объекты-константы?
document.getElementById("btnObject3").addEventListener('click', function() {
    const user = {
        name: "John"
    };
    alert(`Да, будет работать, т.к. константа для ссылки на объект, а не для его содержмого. Подробности в консоли`);
    console.log(user);
    // это будет работать?
    user.name = "Pete";
    console.log(user);
});

//4. Сумма свойств объекта
document.getElementById("btnObject4").addEventListener('click', function() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      };
    let sum = 0;
    for (let key in salaries) {
        // if (isFinite(salaries[key])) {
        //     sum += Number(salaries[key]);
        // }
        if (typeof salaries[key] == 'number') {
            sum += salaries[key];
        }
    }
    alert(sum);
});

//5. Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
document.getElementById("btnObject5").addEventListener('click', function () {
    alert(`Подробности в консоли`);
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    console.log(menu);
    multiplyNumeric(menu);
    console.log(menu);
});