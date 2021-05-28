var $addEntryButton = document.querySelector('.addEntry');
var $modalContainerOff = document.querySelector('.modalContainerOff');

$addEntryButton.addEventListener('click', function (event) {
  $modalContainerOff.className = 'modalContainerOn';
});

// function render(table) {
//   var tbody = document.createElement('tbody');
//   var onetr = document.createElement('tr');
//   var td = document.createElement('td');
//   var tdTwo = document.createElement('td');
//   var button = document.createElement('button');
// }
