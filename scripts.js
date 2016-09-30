var number = 0;
var answers = '';
var i = 1;

$(document).ready(function(){
  hideButtons();
});


$('.next-step-button').on('click', function() {
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
  resetSelectedButtonColor($('.subtract, .multiply, .divide'));

});

$('.subtract').on('click', function(){
  subtract();
  changedSelectedButtonColor($('.subtract'));
  resetSelectedButtonColor($('.divide, .add, .multiply'));
});

$('.multiply').on('click', function(){
  multiply();
  changedSelectedButtonColor($('.multiply'));
  resetSelectedButtonColor($('.subtract, .add, .divide'));
});

$('.divide').on('click', function(){
  divide();
  changedSelectedButtonColor($('.divide'));
  resetSelectedButtonColor($('.subtract, .multiply, .add'));
});


/*Create object to handle main whiteboard functionality*/
//Do this after the reset button functionality works

function hideButtons() {
  $('.add').hide();
  $('.subtract').hide();
  $('.multiply').hide();
  $('.divide').hide();
  $('.reset-button').hide();
}

function clearWhiteboard() {
  $('.directions').hide();
  $('#whiteboard').html('');
}

function showButtons() {
  $('.add').fadeIn();
  $('.subtract').fadeIn();
  $('.multiply').fadeIn();
  $('.divide').fadeIn();
  $('.reset-button').fadeIn();
  $('.directions').fadeIn();
}

function showContent() {
  $('#whiteboard').fadeIn();
}

function resetTable() {
  clearInputField();
  hideButtons();
  clearWhiteboard();
  resetSelectedButtonColor($('.add, .subtract, .multiply, .divide'));
}

function changedSelectedButtonColor(button) {
  $(button).css({'backgroundColor': '#FD746C','color': 'white'});
}

function resetSelectedButtonColor(button, buttonTwo, buttonThree, buttonFour) {
  $(button).css({'backgroundColor': 'white','border': '3px solid #FD746C', 'color': 'black'});
  $(buttonTwo).css({'backgroundColor': 'white','border': '3px solid #FD746C', 'color': 'black'});
  $(buttonThree).css({'backgroundColor': 'white','border': '3px solid #FD746C', 'color': 'black'});
  $(buttonFour).css({'backgroundColor': 'white','border': '3px solid #FD746C', 'color': 'black'});
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
