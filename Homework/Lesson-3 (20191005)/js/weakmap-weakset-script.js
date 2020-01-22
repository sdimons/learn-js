//1. Хранение отметок "не прочитано"
el = document.getElementById("btnWeakmapWeakset1");
el.addEventListener('click', function () {
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];

    let readingMesages =  new WeakMap();
    for(let key of messages) {
        if (!readingMesages.has(key)) {
            readingMesages.set(key, false);
        }
    }
    readingMesages.set(messages[1], true);
    alert('Результаты в консоли');
    console.log(readingMesages);
});

//2. Хранение времени прочтения
el = document.getElementById("btnWeakmapWeakset2");
el.addEventListener('click', function () {
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];
    
    let whenReadingMesages =  new WeakMap();
    for(let key of messages) {
        if (!whenReadingMesages.has(key)) {
            whenReadingMesages.set(key, null);
        }
    }

    whenReadingMesages.set(messages[1], new Date());
    alert('Результаты в консоли');
    console.log(whenReadingMesages);
});