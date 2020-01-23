function sum(a){
    return function(b) {
        return a + b;
    };
}

function makeBuffer() {
    let buffer = '';
    return function(str) {
        if (!str)
            return buffer;
        buffer += str;
    };
}

function makeBuffer2() {
    let text = '';
    function buffer(str) {
        if (!str)
            return text;
        text += str;
    };
    buffer.clear = function() {
        text = '';
    };
    return buffer;
}

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
      let shooter = ((num) => {
        return (() => 
        {
            alert(`i = ${num}`); // должна выводить порядковый номер
        });
      })(i);
      shooters.push(shooter);
      i++;
    }
    return shooters;
  }

const closureSum = document.getElementById('closureSum');
if (closureSum) {
    closureSum.addEventListener('click', function() {
        alert(`sum(1)(2) = ${sum(1)(2)}`);
        alert(`sum(5)(-1) = ${sum(5)(-1)}`);
    });
}
else{
    alert('Эдемент с id closureSum не найден');
}

const stringBufferelement = document.getElementById('stringBuffer');
if (stringBufferelement) {
    stringBufferelement.addEventListener('click', function() {
        var buffer = makeBuffer();

        // добавить значения к буферу
        buffer('Замыкания');
        buffer(' Использовать');
        buffer(' Нужно!');

        // получить текущее значение
        alert( buffer() );
    });
}
else{
    alert('Эдемент с id stringBuffer не найден');
}

const stringBufferWithClearElement = document.getElementById('stringBufferWithClear');
if (stringBufferWithClearElement) {
    stringBufferWithClearElement.addEventListener('click', function() {
        var buffer = makeBuffer2();

        // добавить значения к буферу
        buffer('Замыкания');
        buffer(' Использовать');
        buffer(' Нужно!');
        
        // получить текущее значение
        alert( buffer() );

        buffer.clear();
        alert( buffer() );
    });
}
else{
    alert('Эдемент с id stringBufferWithClear не найден');
}

const makeArmyElement = document.getElementById('makeArmy');
if (makeArmyElement) {
    makeArmyElement.addEventListener('click', function() {
        let army = makeArmy();
        army[0]();
        army[5]();
    });
}
else{
    alert('Эдемент с id makeArmy не найден');
}