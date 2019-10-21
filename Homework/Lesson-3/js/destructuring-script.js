//1. Деструктурирующее присваивание
let el = document.getElementById("btnDestructuring1");
el.addEventListener('click', function () {
    let user = {
        name: "John",
        years: 30
    };
 
    let {name, years: age, isAdmin = false} = user;

    alert( name ); // John
    alert( age ); // 30
    alert( isAdmin ); // false
});

//2. Максимальная зарплата
function topSalary(salaries) {
    if ((Object.keys(salaries) || []).length == 0) {
        return null;
    }
    let {maxKey = "", maxSalary = 0} = {};
    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary = value;
            maxKey = key;
        }
    }
    if (maxKey != "") {
        return {[maxKey]: maxSalary};
    }
    return null;
}
el = document.getElementById("btnDestructuring2");
el.addEventListener('click', function () {
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
    let result = topSalary(salaries);
    
    alert(`Исходные данные: ${JSON.stringify(salaries)}\n`+
          `Результат: ${JSON.stringify(result)}`);
});