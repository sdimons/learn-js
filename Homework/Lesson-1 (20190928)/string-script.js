//Сделать первый символ заглавным
function ucFirst(str) {
    if (str.length > 0)
        return str[0].toUpperCase() + str.slice(1);
    return "Пустая строка";
}
document.getElementById("btnString1").addEventListener('click', function() {
    alert(ucFirst(document.getElementById("txtString").value));
});

//Усечение строки
function checkSpam(str) {
    return (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx'));
}
document.getElementById("btnString2").addEventListener('click', function() {
    alert(checkSpam(document.getElementById("txtString").value));
});

//Выделить число
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }
    return str;
}
document.getElementById("btnString3").addEventListener('click', function() {
    alert(truncate(document.getElementById("txtString").value, 20));
});

//Выделить число
function extractCurrencyValue(str){
    return Number(str.substring(1));
}

document.getElementById("btnString4").addEventListener('click', function() {
    alert(extractCurrencyValue(document.getElementById("txtString").value) === Number(prompt('Введите число для сравнения')));
});