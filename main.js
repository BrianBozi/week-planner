var data = {
  // view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var todoJSON = localStorage.getItem('javascript-local-storage');

if (todoJSON !== null) {
  data = JSON.parse(todoJSON);
}

window.addEventListener('beforeunload', function (event) {
  var oldTodoJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', oldTodoJSON);
});

// real logic
var $addEntryButton = document.querySelector('.addEntry');
var $modalContainerOff = document.querySelector('.modalContainerOff');

$addEntryButton.addEventListener('click', function (event) {
  $modalContainerOff.className = 'modalContainerOn';
});

var $form = document.querySelector('#form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();

  var post = {
    day: $form.days.value,
    time: $form.time.value,
    notes: $form.notes.value
    // entryId: data.nextEntryId
  };

  return post;
});

// function render(table) {
//   var tbody = document.createElement('tbody');
//   var onetr = document.createElement('tr');
//   var td = document.createElement('td');
//   var tdTwo = document.createElement('td');
//   var button = document.createElement('button');
// }
