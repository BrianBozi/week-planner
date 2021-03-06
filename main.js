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
var $timeOne = document.querySelector('.timeOne');
var $timeTwo = document.querySelector('.timeTwo');
var $timeThree = document.querySelector('.timeThree');
var $timeFour = document.querySelector('.timeFour');
var $timeFive = document.querySelector('.timeFive');
var $timeSix = document.querySelector('.timeSix');
var $timeSeven = document.querySelector('.timeSeven');
var $timeEight = document.querySelector('.timeEight');
var $descriptionOne = document.querySelector('.descriptionOne');
var $descriptionTwo = document.querySelector('.descriptionTwo');
var $descriptionThree = document.querySelector('.descriptionThree');
var $descriptionFour = document.querySelector('.descriptionFour');
var $descriptionFive = document.querySelector('.descriptionFive');
var $descriptionSix = document.querySelector('.descriptionSix');
var $descriptionSeven = document.querySelector('.descriptionSeven');
var $descriptionEight = document.querySelector('.descriptionEight');
var $sunday = document.querySelector('.sundayButton');
var $monday = document.querySelector('.mondayButton');
// var $tuesday = document.querySelector('.tuesdayButton');
// var $wednesday = document.querySelector('.wednesdayButton');
// var $thursday = document.querySelector('.thursdayButton');
// var $friday = document.querySelector('.fridayButton');
// var $saturday = document.querySelector('.saturdayButton');
var $span = document.querySelector('.day');
var $table = document.querySelector('.a');

function tableReset() {
  $table.reset();
}

$sunday.addEventListener('click', function (event) {
  $span.textContent = 'sunday';

  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].days === 'sunday' && $timeOne.textContent === '') {
      $timeOne.append(data.entries[i].time);
      $descriptionOne.append(data.entries[i].notes);
    } else if (data.entries[i].days === 'sunday' && $timeTwo.textContent === '') {
      $timeTwo.append(data.entries[i].time);
      $descriptionTwo.append(data.entries[i].notes);
    } else {
      $timeThree.append(data.entries[i].time);
      $descriptionThree.append(data.entries[i].notes);
    }
  }

});

$monday.addEventListener('click', function (event) {
  $span.textContent = 'monday';
  tableReset();
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].days === 'monday' && $timeOne.textContent === '') {
      $timeOne.append(data.entries[i].time);
      $descriptionOne.append(data.entries[i].notes);
    } else if (data.entries[i].days === 'monday' && $timeTwo.textContent === '') {
      $timeTwo.append(data.entries[i].time);
      $descriptionTwo.append(data.entries[i].notes);
    } else {
      $timeThree.append(data.entries[i].time);
      $descriptionThree.append(data.entries[i].notes);
    }
  }
});

// $tuesday;

// $wednesday;

// $thursday;

// $friday;

// $saturday;

$form.addEventListener('submit', function (event) {
  // event.preventDefault();
  var $modalContainerOn = document.querySelector('.modalContainerOn');
  var post = {
    day: $form.days.value,
    time: $form.time.value,
    notes: $form.notes.value
    // nextEntryId: data.nextEntryId
  };

  data.entryId++;
  data.entries.unshift(post);
  // console.log(post);
  $form.reset();
  $modalContainerOn.className = 'modalContainerOff';
});

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    if ($timeOne.textContent === '') {
      $timeOne.append(data.entries[i].time);
      $descriptionOne.append(data.entries[i].notes);
    } else if ($timeTwo.textContent === '') {
      $timeTwo.append(data.entries[i].time);
      $descriptionTwo.append(data.entries[i].notes);
    } else if ($timeThree.textContent === '') {
      $timeThree.append(data.entries[i].time);
      $descriptionThree.append(data.entries[i].notes);
    } else if ($timeFour.textContent === '') {
      $timeFour.append(data.entries[i].time);
      $descriptionFour.append(data.entries[i].notes);
    } else if ($timeFive.textContent === '') {
      $timeFive.append(data.entries[i].time);
      $descriptionFive.append(data.entries[i].notes);
    } else if ($timeSix.textContent === '') {
      $timeSix.append(data.entries[i].time);
      $descriptionSix.append(data.entries[i].notes);
    } else if ($timeSeven.textContent === '') {
      $timeSeven.append(data.entries[i].time);
      $descriptionSeven.append(data.entries[i].notes);
    } else if ($timeEight.textContent === '') {
      $timeEight.append(data.entries[i].time);
      $descriptionEight.append(data.entries[i].notes);
    }
  }
});
