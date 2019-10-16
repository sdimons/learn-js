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
  let rows = str.split(';');
  let styleObject = {};
  for (let i = 0; i < rows.length; i++) {
    let values = rows[i].split(':');
    if (values.length == 2) {
      if (!(values[0].trim() in styleObject)) {
        styleObject[values[0].trim()] = values[1].trim();
      }
    }
  }
  return styleObject;
}

document.getElementById("btnStyleToObject").addEventListener('click', function () {
  alert('Подробности в консоли');
  console.log(styleToObject(style));
});