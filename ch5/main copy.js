const list = document.querySelector('#list');
const addItemText = document.querySelector('#add-item-text');
const addItemBtn = document.querySelector('#add-item-btn');
const removeBtn = document.querySelector('.remove-btn');

function onAdd() {
  // 1. 사용자가 입력한 text를 받아온다
  const text = addItemText.value;

  if(text === '') {
    addItemText.focus();
    return;
  }

  // 2. 받아온 text를 이용해서 새로운 아이템을 만든다(li)
  const listItems = createItem(text);

  // 3. list안에 새로운 아이템을 추가한다
  list.append(listItems);

  // 4. text입력창을 초기화한다
  addItemText.value = '';
  addItemText.focus(); // 만약 focus를 안추면 추가 후 자동으로 입력창으로 돌아가지 않기 때문에 사용자가 일일이 입력창을 다시 클릭해야 함
}

function createItem(text) {
  const listItems = document.createElement('li');
  listItems.setAttribute('class','list-items');

  const listItem = document.createElement('div');
  listItem.setAttribute('class','list-item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class','item-name');
  itemName.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('class','remove-btn btn-cursor');
  removeBtn.innerHTML = `
    <i class="fa-solid fa-trash-can"></i> 
  ` // icon은 변경할 일이 없기 때문에 수동으로 적어준다
  removeBtn.addEventListener('click', () => {
    list.removeChild(listItems);
  });

  const underLine = document.createElement('div');
  underLine.setAttribute('class','under-line');
  

  // listItem.append(itemName, removeBtn);
  listItem.appendChild(itemName);
  listItem.appendChild(removeBtn);

  listItems.appendChild(listItem);
  listItems.appendChild(underLine);
  return listItems;
}

addItemBtn.addEventListener('click', () => {
  onAdd();
});

addItemText.addEventListener('keypress', (e) => {
  if(e.keyCode === 13) {
    onAdd();
  }
});