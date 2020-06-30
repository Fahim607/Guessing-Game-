//Guess a number from 1 to 5
//Generate a random number between 1 to 5
//If the guess number matches random number, then show the message won else lost
//Run the game for 5 times
//Show the number of won and losts

var numOfWon = 0;
var numOfLost = 0;

for(var i=1; i<6; i++)
{
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random()*5) + 1;

    if(guessNumber == randomNumber)
    {
        console.log("You have WON !!!");
        numOfWon++;
    }
    else
    {
        console.log("You have LOST !!! Random number was : " + randomNumber);
        numOfLost++;
    }
}
document.write("Total number of WON = " + numOfWon + "<br/>");
document.write("Total number of LOST = " + numOfLost + "<br/>");