'use strict';

// constants
const list_box = document.querySelector('#LIST_WRAP');
const input_list = document.querySelector('#INPUT_LIST');
const add_btn = document.querySelector('#ADD_BTN');
// const edit_btn = document.querySelector('#EDIT_BTN');
const delete_btn = document.querySelectorAll('.delete_btn');

// list array
const list_arr = new Array();

// 입력된 아이템을 array에 저장
function saveItems(text) {
  let list_obj = { name: text, id: `ITEM_${list_arr.length}` };
  list_arr.push(list_obj);
  return list_arr;
}

// 입력된 아이템 html 태그로 만들기
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

  del_btn.addEventListener('click',deleteItem);

  li.appendChild(input_chkbox);
  li.appendChild(label);
  li.appendChild(del_btn);

  list_box.appendChild(li);

  input_list.value = '';
  input_list.focus();
}

// html, array에서 삭제
function deleteItem(btn) {
  let del_btn = btn.target.parentNode;
  let item_id = del_btn.previousSibling.getAttribute('for');
  let list_num = item_id.split('_');
  list_box.removeChild(del_btn.parentNode);
  list_arr.splice(list_num[1],1);
  // console.log('delete',list_arr);
  return list_arr;
}

add_btn.addEventListener('click', () => {
  const current_value = input_list.value;
  let index = list_arr.length;
  saveItems(current_value);
  createList(list_arr[index].name,list_arr[index].id);
});

input_list.addEventListener('keyup', (event) => {
  if( event.keyCode === 13 ) {
    const current_value = input_list.value;
    let index = list_arr.length;
    saveItems(current_value);
    createList(list_arr[index].name,list_arr[index].id);
    // console.log('add',list_arr);
  }
});

// edit click -> delete btn show & hide
// 나중에 추가해보기
// let del_state = false;
// edit_btn.addEventListener('click', () => {
//   const delete_btn = document.querySelectorAll('.delete_btn');
//   if( !del_state ) {
//     delete_btn.forEach((del,index) => {
//       del.style.transform = 'translateX(0)';
//       del.style.transition = 'all 0.3s';

//       del.addEventListener('click', () => {
//         deleteItem(del);
//       })
//     });
//     edit_btn.innerText = 'DONE';
//     del_state = true;
//   } else {
//     delete_btn.forEach((del,index) => {
//       del.style.transform = 'translateX(60px)';
//     });
//     edit_btn.innerText = 'EDIT';
//     del_state = false;
//   }
// });
