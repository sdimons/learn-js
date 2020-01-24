function search(event) {
    console.log(event.target.value);
}

function debounce(fn, ms) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setInterval(() => {
            console.log(this);
            return fn.call(this, ...args)
        }, ms);
    }
}

function handler(element, {clientX, clientY}) {
    console.log(clientX, clientY);
    element.innerText = `${clientX},${clientY}`;
}
function throttle(fn, ms, element) {
    let isBusy = false;
    return function(...args) {
        if(isBusy) {
            return;
        }
        isBusy = true;
        setTimeout(() => {
            isBusy = false;
        }, ms);
        return fn.call(this, element, ...args);
    }
}

const debounceSearch = document.getElementById("debounceSearch");
if (debounceSearch) {
    debounceSearch.addEventListener('input', debounce(search, 1000));
}

const throttleXY = document.getElementById("throttleXY");
if (throttleXY){
    document.addEventListener('mousemove', throttle(handler, 3000, throttleXY));
}



