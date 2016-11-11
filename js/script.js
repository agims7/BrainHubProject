var inputElement = document.getElementById('inputElement');
var btnSubmit = document.getElementById('btnSubmit');

function setBox(moneyValue) {
  var boxArea = document.getElementById('boxArea');
  var boxContent = document.createElement('div');
  var boxAmount = document.createElement('div');
  var plnAmount = document.createElement('p');
	var moneyAmount = document.createElement('p');
  var timeText = document.createElement('p');
  var text = document.createTextNode("pln amount");
	var result = document.createTextNode(moneyValue);

  boxArea.appendChild(boxContent);
  boxContent.classList.add('boxContent');
  boxContent.appendChild(boxAmount);
  boxAmount.classList.add('boxAmount');
  plnAmount.classList.add('amountText');
  plnAmount.appendChild(text);
  boxAmount.appendChild(plnAmount);
	moneyAmount.classList.add('moneyValue')
	moneyAmount.appendChild(result);
	boxAmount.appendChild(moneyAmount);
  timeText.innerHTML = moment().format('YYYY.MM.DD HH.mm');
  boxContent.appendChild(timeText);
}

function clearButton() {
	inputElement.value = "";
}

function checkButton() {

	var inputValue = inputElement.value;
  var randomNumber = Math.floor(Math.random() * 101);
  var setRate = ( 4.2 * ( 1 + (( randomNumber - 50 ) / 1000 )));
  var moneyValue = (inputValue * setRate).toFixed(4);

  setBox(moneyValue);
  clearButton();
}

btnSubmit.addEventListener('click', function () {
	checkButton()
});

inputElement.addEventListener('keypress', function (event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		checkButton();
	}
});