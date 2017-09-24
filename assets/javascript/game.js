// ==========================================================================================
// "Global Variables"
// ------------------------------------------------------------------------------------------
var myAlpha = "abcdefghijklmnopqrstuvwxyz";
var myRnd = Math.floor(Math.random()*myAlpha.length);
var compSelect = myAlpha[myRnd];
var tempStr = "";
var myWin = 0;
var myLose = 0;
var myLives = 10;
// ------------------------------------------------------------------------------------------
// ==========================================================================================


// ==========================================================================================
// "Hint Function"
// Summary: A function that provides the user an option of help, which is used as an onclick
//   event
// ------------------------------------------------------------------------------------------
var myHintFunc = function() {
	if(document.getElementById("myHint").style.display == "none"){
		document.getElementById("myHint").style.display = "block";
		if (myLives > 5) {
			myLives = 5;
			document.getElementById("myLives").innerHTML = myLives;
		}	
	} else {
		document.getElementById("myHint").style.display = "none";
	}
}
// ------------------------------------------------------------------------------------------
// ==========================================================================================


// ==========================================================================================
// "Hot-Cold Function"
// Summary: A function that provides the user input on distance from current selection to
//   that of the randomly chosen value, if the hint button is selected.
// ------------------------------------------------------------------------------------------
var checkMyTemp = function(myGuess, compGuess) {
	var myTemperature = 0;

	myTemperature = Math.abs(myAlpha.indexOf(myGuess) - myAlpha.indexOf(compGuess));
	
	switch(true) {
		case (myTemperature >= 10):
			document.getElementById("myTemp").innerHTML = "You're Freezing";
			break;
		case (myTemperature >= 8 && myTemperature < 10):
			document.getElementById("myTemp").innerHTML = "You're Cold";
			break;
		case (myTemperature >= 6 && myTemperature < 8):
			document.getElementById("myTemp").innerHTML = "You're Cool";
			break;
		case (myTemperature >= 4 && myTemperature < 6):
			document.getElementById("myTemp").innerHTML = "You're Warm";
			break;
		case (myTemperature >= 1 && myTemperature < 4):
			document.getElementById("myTemp").innerHTML = "You're Hot";
			break;
		default:
			document.getElementById("myTemp").innerHTML = "You're on Fire";
	}
}
// ------------------------------------------------------------------------------------------
// ==========================================================================================


// ==========================================================================================
// "Key Clicker Event"
// Summary: each key that is clicked is checked against a list of conditions, which are as
//   follows:
//   1. Checks if the user input is a value within the alphabet "a-z" and if the input hasn't
//      already been clicked
//   2. Checks if the user input is the randomly chosen value, if the initial condition is
//      satisfied the win score increments and is diplayed, guess amount is reset.  If the
//      condition is not satisfied, then the guess amount decrements and is displayed.
//   3. Checks if the guess amount reaches zero (0), if this condition is satisified, then
//      loss increments and guess amount resets.
// ------------------------------------------------------------------------------------------
document.onkeyup = function(event) {
	
	var userGuess = event.key;
	
	if (tempStr.indexOf(userGuess.toLowerCase()) == -1 
		&& myAlpha.indexOf(userGuess.toLowerCase()) >= 0) {
		tempStr += userGuess;
		
		checkMyTemp(userGuess, compSelect);
		 
		if (userGuess == compSelect) {
			myWin++;
			myLives = 10;
			document.getElementById("myGuesses").innerHTML = tempStr.split("").join(", ");
			tempStr="";
			document.getElementById("myHint").style.display = "none";
			document.getElementById("myTemp").innerHTML = "";
			myRnd = Math.floor(Math.random()*myAlpha.length);
			compSelect = myAlpha[myRnd];
		} else {
			myLives--;
			document.getElementById("myGuesses").innerHTML = tempStr.split("").join(", ");
		}
	}
	
	if(myLives == 0) {
		myLose++;
		myLives = 10;
		document.getElementById("myGuesses").innerHTML = tempStr.split("").join(", ");
		tempStr="";
		document.getElementById("myHint").style.display = "none";
		document.getElementById("myTemp").innerHTML = "";
		myRnd = Math.floor(Math.random()*myAlpha.length);
		compSelect = myAlpha[myRnd];
	}

	document.getElementById("myWins").innerHTML = myWin;
	document.getElementById("myLosses").innerHTML = myLose;
	document.getElementById("myLives").innerHTML = myLives;

}
// ------------------------------------------------------------------------------------------
// ==========================================================================================