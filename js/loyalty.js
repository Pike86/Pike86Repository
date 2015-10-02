
var correctAnswers = 0;

/* The questions begin here*/
var answer1 = prompt("Big Brother is a highly capable administrator of the centralized economy. YES or NO?");
if (answer1.toUpperCase()==='YES'){
	correctAnswers += 1;
}

var answer2 = prompt("I consider myself to be an independent thinker. YES or NO?");
if (answer2.toUpperCase()==='NO'){
	correctAnswers += 1;
}

var answer3 = prompt("While clearly misguided, public dissidents sometimes make very valid critiques of Big Brother's leadership. YES or NO?");
if (answer3.toUpperCase()==='NO'){
	correctAnswers += 1;
}

var answer4 = prompt("I would be honored to give my life in the service of Oceania and the principles of the IngSoc party. YES or NO?");
if (answer4.toUpperCase()==='YES'){
	correctAnswers += 1;
}

var answer5 = prompt("I sometimes wish for more intimate relationships with my colleagues. YES or NO?");
if (answer5.toUpperCase()==='NO'){
	correctAnswers += 1;
}

/*The results should populate here*/

document.write("<p>Comrade, you scored " + correctAnswers + " out of the 5 total questions correct.</p>");

if (correctAnswers===5) {
	document.write("<p>You've done it, Comrade! Glory to Big Brother; Glory to Oceania.</p>");
} else if (correctAnswers===4) {
	document.write("<p>Aside from one HUGE exception, everyone makes mistakes. Don't sweat it, comrade.</p>");
} else {
	document.write("<p>Remain in your home, criminal. The thought police will be arriving shortly.</p>");
}

