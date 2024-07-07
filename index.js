document.addEventListener('DOMContentLoaded', function() {
const addItemButton = document.querySelector('.add-btn');
const clearItemButton = document.querySelector('.clear-btn');
const markPurchasedButton=document.querySelector('.purchased-btn')
const itemList = document.getElementById('item-List');
const itemInput = document.getElementById('item');
  
function addItem(newItem) {
    const li = document.createElement('li');
    li.textContent = newItem;
    itemList.appendChild(li);
    itemInput.value = '';
    
}

addItemButton.addEventListener('click', function(event) {
    event.preventDefault();
    const newItem = itemInput.value
    if (newItem !== '') {
        addItem(newItem);
    }
})
markPurchasedButton.addEventListener('click', function(event) {
    event.preventDefault();
    const items = itemList.querySelectorAll('li');
    items.forEach(item => {
      if (!item.classList.contains('purchased')) {
        item.classList.add('purchased');
      }
    });
  });

  
clearItemButton.addEventListener('click', function(event) {
     event.preventDefault();
      itemList.innerHTML = '';
      
    });
})