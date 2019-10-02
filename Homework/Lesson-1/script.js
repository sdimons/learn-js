function ucFirst(str) {
    if (str.length > 0)
        return str[0].toUpperCase() + str.slice(1);
    return "Пустая строка";
}

document.getElementById("btnString1").addEventListener('click', function() {
    alert(ucFirst(document.getElementById("txtString").value));
});