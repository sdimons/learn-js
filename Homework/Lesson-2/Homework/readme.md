# Для запуска проекта запустите index.html
- Кнопки открывают описанию темы.  
- Ссылки открывают условия задач.  

# Долнительные задачи
## deepEqual(a, b)
```javascript
// Code goes here
'use strict';
let a = {
  name: 'Misha',
  order: {
    price: 20
  },
};
let b = {
  name: 'Misha',
  order: {
    price: 20,
  }
};
console.log(a === b);
function deepEqual(a, b) {
  
}
deepEqual(a, b);
```
## styleToObject(str)
```javascript
// Code goes here
let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
  return {};
}
```