let number = 0;
let answers = '';
let i = 1;

$(document).ready(function(){
  hideButtons();
});

$('.next-step-button').on('click', () => {
  $('.directions').html('Choose a math operator and watch the magic happen.');
  showButtons();
  return $('.user').val();
});

$('.reset-button').on('click', () => {
  resetTable();
});

$('.add').on('click', () => {
  add();
  changedSelectedButtonColor($('.add'));
  resetSelectedButtonColor($('.subtract, .multiply, .divide'));

});

$('.subtract').on('click', () => {
  subtract();
  changedSelectedButtonColor($('.subtract'));
  resetSelectedButtonColor($('.divide, .add, .multiply'));
});

$('.multiply').on('click', () => {
  multiply();
  changedSelectedButtonColor($('.multiply'));
  resetSelectedButtonColor($('.subtract, .add, .divide'));
});

$('.divide').on('click', () => {
  divide();
  changedSelectedButtonColor($('.divide'));
  resetSelectedButtonColor($('.subtract, .multiply, .add'));
});

const hideButtons = () => {
  $('.add').hide();
  $('.subtract').hide();
  $('.multiply').hide();
  $('.divide').hide();
  $('.reset-button').hide();
}

const clearWhiteboard = () => {
  $('.directions').hide();
  $('#whiteboard').html('');
}

const showButtons = () => {
  $('.add').fadeIn();
  $('.subtract').fadeIn();
  $('.multiply').fadeIn();
  $('.divide').fadeIn();
  $('.reset-button').fadeIn();
  $('.directions').fadeIn();
}

const showContent = () => {
  $('#whiteboard').fadeIn();
}

const resetTable = () => {
  clearInputField();
  hideButtons();
  clearWhiteboard();
  resetSelectedButtonColor($('.add, .subtract, .multiply, .divide'));
}

const changedSelectedButtonColor = (button) => {
  $(button).css({'backgroundColor': '#FD746C','color': 'white'});
}

const resetSelectedButtonColor = (button, buttonTwo, buttonThree, buttonFour) => {
  $(button).css({
    'backgroundColor': 'white',
    'border': '3px solid #FD746C',
    'color': 'black'});
  $(buttonTwo).css({
    'backgroundColor': 'white',
    'border': '3px solid #FD746C',
    'color': 'black'});
  $(buttonThree).css({
    'backgroundColor': 'white',
    'border': '3px solid #FD746C',
    'color': 'black'});
  $(buttonFour).css({
    'backgroundColor': 'white',
    'border': '3px solid #FD746C',
    'color': 'black'});
}

const clearInputField = () => {
  $('.user').val('');
}

const convertToInt = (num) => {
  return parseInt(num);
}

const showAnswers = () => {
  $('#whiteboard').html(answers);
  i = 0;
}

const clearAnswersVariable = () => {
  answers = '';
}

const add = () => {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, '+');
    i++;
  }
  i = 0;
  showAnswers();
clearAnswersVariable();
}

const subtract = () => {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, '-');
    i++;
  }
  i = 0;
  showAnswers();
  clearAnswersVariable();
}

const multiply = () => {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, 'x');
    i++;
  }
  i = 0;
  showAnswers();
  clearAnswersVariable();
}

const divide = () => {
  number = convertToInt($('.user').val());
  while (i < 101) {
    template(i, number, '/');
    i++;
  }
  i = 0;
  showAnswers();
  clearAnswersVariable();
}

const template = ( i, number, opString) => {
  var string = '<div class="answer">' + '<p>' + i + " " + opString + " "+ number + " = " + doOperation(i, number, opString) + '</p>' + '</div>';
  answers += string;
}

const doOperation = (i, number, opString) => {
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
      console.error('ERROR: in doOperation function')
  }
}
