// Source: https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
const chkIntros = document.querySelectorAll("input[name='intro']");

chkIntros.forEach((checkbox, idx) => {
  checkbox.addEventListener("click", function() {
    unchecker(chkIntros, idx);
  });
});

const unchecker = (items, keepVal) => {
  items.forEach((item, idx) => {
    if (idx == keepVal) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
}