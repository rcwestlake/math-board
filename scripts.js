var number = 0;
var answers = '';
var i = 1;

$document.ready(function(){
  hideButtons();

});


$('.next-step-button').on('click', function() {
  console.log($('.user').val());
  $('.directions').html('Choose a math operator and watch the magic happen.');
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
  $('.directions').show();
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
  $('#whiteboard').html(answers);
  i = 0;
}

function clearAnswersVariable() {
  answers = '';
}

function add() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, '+');
    i++;
  }
  i = 0;
  showAnswers();
clearAnswersVariable();
}

function subtract() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, '-');
    i++;
  }
  i = 0;
  showAnswers();
  clearAnswersVariable();
}

function multiply() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, 'x');
    i++;
  }
  i = 0;
  showAnswers();
  clearAnswersVariable();
}

function divide() {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, '/');
    i++;
  }
  i = 0;
  showAnswers();
  clearAnswersVariable();
}

function template( i, number, opString) {
  var string = '<div class="answer">' + '<p>' + i + " " + opString + " "+ number + " = " + doOperation(i, number, opString) + '</p>' + '</div>';

  answers += string;
}

function doOperation(i, number, opString) {
  switch (opString) {
    case '+' :
      return i + number;
    case '-' :
      return i - number;
    case '/' :
      var divNum = i / number;
      divNum = +divNum.toFixed(2);
      return divNum;
    case 'x' :
      return i * number;
    default:

  }
}
