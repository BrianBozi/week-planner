var $addEntryButton = document.querySelector('.addEntry');
var $modalContainerOff = document.querySelector('.modalContainerOff');

$addEntryButton.addEventListener('click', function (event) {
  $modalContainerOff.className = 'modalContainerOn';
});
