//Вывести дату в формате дд.мм.гг
function formatDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() % 100}`;
}
document.getElementById("btnDateTime1").addEventListener('click', function () {
    var now = new Date();
    alert(`${now} -> ${formatDate(now)}`);
});