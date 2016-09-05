var number = 0;
var operator = 'add';
var answers = '';
var i = 1;

hideButtons();


$('.number').on('click', function() {
  console.log($('.user').val());
  $('.directions').html('Now choose a math operator and watch the magic happen.');
  showButtons();
  return $('.user').val();
});

$('.reset-button').on('click', function(){
  resetTable();
});


$('.add').on('click', function() {
  add();
  changedSelectedButtonColor($('.add'));
  resetSelectedButtonColor($('.subtract'));
  resetSelectedButtonColor($('.multiply'));
  resetSelectedButtonColor($('.divide'));
});

$('.subtract').on('click', function(){
  subtract();
  changedSelectedButtonColor($('.subtract'));
  resetSelectedButtonColor($('.add'));
  resetSelectedButtonColor($('.multiply'));
  resetSelectedButtonColor($('.divide'));
});

$('.multiply').on('click', function(){
  multiply();
  changedSelectedButtonColor($('.multiply'));
  resetSelectedButtonColor($('.subtract'));
  resetSelectedButtonColor($('.add'));
  resetSelectedButtonColor($('.divide'));
});

$('.divide').on('click', function(){
  divide();
  changedSelectedButtonColor($('.divide'));
  resetSelectedButtonColor($('.subtract'));
  resetSelectedButtonColor($('.multiply'));
  resetSelectedButtonColor($('.add'));
});

function hideButtons() {
  $('.add').hide();
  $('.subtract').hide();
  $('.multiply').hide();
  $('.divide').hide();
  $('.reset-button').hide();
}

function hideContent() {
  $('.directions').hide();
  $('#whiteboard').hide();
}

function showButtons() {
  $('.add').show();
  $('.subtract').show();
  $('.multiply').show();
  $('.divide').show();
  $('.reset-button').show();
}

function showContent() {
  $('#whiteboard').show();
}

function resetTable() {
  clearInputField();
  hideButtons();
  hideContent();
}

function changedSelectedButtonColor(button) {
  $(button).css({'backgroundColor': '#FD746C','color': 'white'});
}

function resetSelectedButtonColor(button) {
  $(button).css({'backgroundColor': 'white','border': '3px solid #FD746C', 'color': 'black'});
}

function clearInputField() {
  $('.user').val('');
}

function convertToInt(num) {
  return parseInt(num);
}

function showAnswers() {
  $('#whiteboard').html('<ul>' + answers + '</ul>');
}

function add() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    answers +=  i + " + " + number + " = " + (i + number) + '<br />';
    i++;
  }
  showAnswers();
}

function subtract() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    answers += i + ' - ' + number + ' = ' + (i - number) + '<br>';
    i++;
  }
  showAnswers();
}

function multiply() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    answers += i + ' x ' + number + ' = ' + (i * number) + ' <br>';
    i++;
  }
  showAnswers();
}

function divide() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    answers += i + ' / ' + number + ' = ' + (i / number) + ' <br>';
    i++;
  }
  showAnswers();
}
