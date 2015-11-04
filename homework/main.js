console.log('linked');

var resetButton = document.getElementById('reload-button')

var makeButtonWork = function(event) {
	window.location.reload(true);
}

resetButton.addEventListener('click', makeButtonWork);

var rowOne = document.querySelector('.row#row-one');
var rowTwo = document.querySelector('.row#row-two');
var rowThree = document.querySelector('.row#row-three');
var rowFour = document.querySelector('.row#row-four');
var rowFive = document.querySelector('.row#row-five');
var rowSix = document.querySelector('.row#row-six');
var rowSeven = document.querySelector('.row#row-seven');
var rowEight = document.querySelector('.row#row-eight');
var rowNine = document.querySelector('.row#row-nine');

var counter = 0;
var toggleXandO = function(event) {
  console.log('is it working?');
  var target = event.target;
  if (counter%2 === 0) {
  	target.textContent = 'X';
	target.classList.add('ex');
	counter++;
	console.log(counter);
  } else if (counter%2 === 1) {
  	target.textContent = 'O'; 
  	target.classList.add('oh');
  	counter++;
  	console.log(counter);
  // } else {
  // 	removeToggle();
  // };
  } else if (counter === 9) {
  	console.log(counter + 'is at nine');
  	removeToggle;

  };
};


var removeToggle = function() {
	
	rowOne.removeEventListener('click', toggleXandO);
	rowTwo.removeEventListener('click', toggleXandO);
	rowThree.removeEventListener('click', toggleXandO);
	rowFour.removeEventListener('click', toggleXandO);
	rowFive.removeEventListener('click', toggleXandO);
	rowSix.removeEventListener('click', toggleXandO);
	rowSeven.removeEventListener('click', toggleXandO);
	rowEight.removeEventListener('click', toggleXandO);
	rowNine.removeEventListener('click', toggleXandO);
   
};
// removeToggle();

rowOne.addEventListener('click', toggleXandO);
rowTwo.addEventListener('click', toggleXandO);
rowThree.addEventListener('click', toggleXandO);
rowFour.addEventListener('click', toggleXandO);
rowFive.addEventListener('click', toggleXandO);
rowSix.addEventListener('click', toggleXandO);
rowSeven.addEventListener('click', toggleXandO);
rowEight.addEventListener('click', toggleXandO);
rowNine.addEventListener('click', toggleXandO);















