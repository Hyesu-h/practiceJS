'use strict';

const body = document.getElementsByTagName('body')[0];
const input_color = document.getElementById('COLOR_CODE');
const change_btn = document.getElementById('CHANGE_BTN');
const alert_text = document.getElementById('ALERT_AREA');

// find G-Z g-z ' '
const regPattern = /[G-Z|\s]/gi;

function change_BG() {
  let color_code = input_color.value;
  let color_check = regPattern.test(color_code);

  if(color_check) {
    // not a code
    alert_text.style.display = 'block';
  } else {
    alert_text.style.display = 'none';
    body.style.background = `#${color_code}`;
  };
}

input_color.addEventListener('keyup', (event) => {
  if(event.keyCode === 13) {
    change_BG();
  }
});

change_btn.addEventListener('click', () => {
  change_BG();
});
