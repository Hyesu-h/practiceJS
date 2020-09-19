'use strict';

const body = document.getElementsByTagName('body')[0];
const input_color = document.getElementById('COLOR_CODE');
const change_btn = document.getElementById('CHANGE_BTN');

change_btn.addEventListener('click', function () {
  let color_code = input_color.value;

  color_code[0] === '#'
    ? (color_code = color_code)
    : (color_code = `#${color_code}`);

  body.style.backgroundColor = color_code;
});

// Add HEX Code validation
