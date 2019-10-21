function transfirmString(str) {
    let arr = str.split('');
    return arr.reduce((newStr,letter) => {
        if (newStr.length === 0) {
            newStr.push(letter);
        } else if (newStr[newStr.length - 1].endsWith(letter)) {
            newStr[newStr.length - 1] += letter; 
        }
        else {
            newStr.push(letter);
        }
        return newStr;
    }, []).map((item) => item.length + item[0]).join('');
}
document.getElementById("btnSymbolsNumber").addEventListener('click', function () {
    let input = null;
    do{
        input = prompt("Введите тестовую строку");
        alert(`Результат: ${transfirmString(input)}`);
    } while(input != null);
});