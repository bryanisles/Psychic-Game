var myAlpha = "abcdefghijklmnopqrstuvwxyz";
var myRnd = Math.floor(Math.random()*myAlpha.length);
var compSelect = myAlpha[myRnd];
var tempStr = "";
var displayTempStr = "";
var myWin = 0;
var myLose = 0;
var myLives = 10;

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


document.onkeyup = function(event) {
	
	var userGuess = event.key;
	
	if (tempStr.indexOf(userGuess.toLowerCase()) == -1 
		&& myAlpha.indexOf(userGuess.toLowerCase()) >= 0) {
		tempStr += userGuess;
		
		checkMyTemp(userGuess, compSelect);
		
		if (tempStr.length < 2) {
			displayTempStr += userGuess;
		} else {
			displayTempStr += ", " + userGuess;	
		}
		 
		if (userGuess == compSelect) {
			myWin++;
			document.getElementById("myWins").innerHTML = myWin;
			document.getElementById("myLosses").innerHTML = myLose;
			myLives = 10;
			document.getElementById("myLives").innerHTML = myLives;
			document.getElementById("myGuesses").innerHTML = displayTempStr;
			tempStr="";
			displayTempStr="";
			document.getElementById("myHint").style.display = "none";
			myRnd = Math.floor(Math.random()*myAlpha.length);
			compSelect = myAlpha[myRnd];
			document.getElementById("myTemp").innerHTML = "";
		} else {
			myLives--;
			document.getElementById("myLives").innerHTML = myLives;
			document.getElementById("myGuesses").innerHTML = displayTempStr;
		}
	}
	
	if(myLives == 0) {
		myLose++;
		document.getElementById("myLosses").innerHTML = myLose;
		document.getElementById("myWins").innerHTML	= myWin;
		myLives = 10;
		document.getElementById("myLives").innerHTML = myLives;
		document.getElementById("myGuesses").innerHTML = displayTempStr;
		tempStr="";
		displayTempStr = "";
		document.getElementById("myHint").style.display = "none";
		myRnd = Math.floor(Math.random()*myAlpha.length);
		compSelect = myAlpha[myRnd];
		document.getElementById("myTemp").innerHTML = "";
	}
}
