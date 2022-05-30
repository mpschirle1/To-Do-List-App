function newItem() {

  // 1. Adding a new item to the list of items:
  let list = $('#list')
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!')
  } else {
    list.append(li);
  }

  // 2. Crossing out an item from the list of items:
  li.on('dblclick', function () {
    li.addClass('strike');
  })

  // 3. Adding the delete button "X":
  let crossOutButton = $('<crossoutbutton></crossoutbutton>')
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', function () {
    li.addClass('delete');
  })

 // 4. Reordering the items:
  $('#list').sortable();

}
