'use strict';

// constances
const list_box = document.querySelector('#LIST_WRAP');
const input_list = document.querySelector('#INPUT_LIST');
const add_btn = document.querySelector('#ADD_BTN');
const edit_btn = document.querySelector('#EDIT_BTN');
const delete_btn = document.querySelectorAll('.delete_btn');

// list array
// const list_arr = new Array();

// function saveItems(text) {
//   let list_obj = { name: text, id: `ITEM_0${list_arr.length+1}` };
//   list_arr.push(list_obj);
// }

function createList(text, id) {

  const li = document.createElement('li');

  const input_chkbox = document.createElement('input');
  input_chkbox.setAttribute('type', 'checkbox');
  input_chkbox.setAttribute('id', id);

  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.innerText = text;

  const del_btn = document.createElement('button');
  del_btn.innerHTML = '<img src="images/icon_trash.png" alt="delete button"/>';
  del_btn.setAttribute('class','delete_btn');

  li.appendChild(input_chkbox);
  li.appendChild(label);
  li.appendChild(del_btn);

  list_box.appendChild(li);

  input_list.value = '';
  input_list.focus;
}

add_btn.addEventListener('click', () => {
  const current_value = input_list.value;
  createList(current_value, current_value);
});

input_list.addEventListener('keyup', (event) => {
  if(event.keyCode === 13) {
    const current_value = input_list.value;
    createList(current_value, current_value);
  }
})

let del_state = false;
edit_btn.addEventListener('click', () => {
  if(!del_state) {
    delete_btn.forEach((del,index) => {
      del.style.transform = 'translateX(0)';
      del.style.transition = 'all 0.3s';
    });
    edit_btn.innerText = 'DONE';
    del_state = true;
  } else {
    delete_btn.forEach((del,index) => {
      del.style.transform = 'translateX(60px)';
    });
    edit_btn.innerText = 'EDIT';
    del_state = false;
  }
})