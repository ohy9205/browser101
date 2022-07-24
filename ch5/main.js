window.addEventListener('load', ()=>{
  const addItemBtn = document.querySelector('#add-item-btn');
  const form = document.querySelector('form');
  const addItemText = document.querySelector('#add-item-text');
  const list = document.querySelector('#list');

  let removeBtn = '';

  function addItem(itemText) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'list-item');
    listItem.textContent = itemText;

    const removeBtn = document.createElement('i');
    removeBtn.setAttribute('class','fa-solid fa-trash-can btn-cursor remove-btn');
    
    listItem.append(removeBtn);
    list.append(listItem);
  }

  function removeItem() {
    removeBtn = document.querySelectorAll('.remove-btn');

    for(let i=0; i<removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', (e) => {
          removeBtn[i].parentNode.remove();
        });
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemText = addItemText.value;

    if(itemText === '') {
      return 0;
    }
    addItem(itemText);
    addItemText.value = '';

    removeItem();
  });



});