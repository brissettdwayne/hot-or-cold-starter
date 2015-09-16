$(document).ready(function(){

  /*--- Display information modal box ---*/
  $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

  gameTally = [];
    myNum = 0;
   toggle = hintsOn = "";
    
function numGen(){
    myNum = Math.ceil(Math.random()*100);
}
numGen();
    $("#guessButton").click(function(){
    userGuess = document.getElementById('userGuess').value;
      (userGuess != +userGuess || userGuess %1 != 0 || userGuess >100)? user2 = prompt("Please enter an integer between 1 and 100") : user2 = +userGuess;
      feedback = ["CONGRATULATIONS!","VERY HOT!", "HOT!", "Warm", "Cool", "Cold!", "ICE COLD!"];
        diff = Math.abs(user2 - myNum);  
        hintsOn = toggle && (((myNum-user2) >0) ? " -  guess higher" : " -  guess lower");
    
   if (diff > 40){ 
    responseIndex = 6;
           }
        else {
        responseIndex = 1+ Math.ceil(diff/10);
        if (diff < 6) 
               { responseIndex = 1;
                  
              if (diff === 0) {
                responseIndex = 0;
          }
            }
            
      }
shortMsg = feedback[responseIndex];
longMsg = "Your guess is: " + shortMsg;
$('#feedback').text(longMsg + hintsOn);
gameTally.push(user2);
$('#count').text(gameTally.length);   
document.getElementById('userGuess').value = "";
if (diff === 0) {
    $('#feedback').text("Congratulations!  You won it in " + gameTally.length + " guesses!");
    }
$("<li>" + user2 + " - " + shortMsg  + "</li>").prependTo('#guessList');
 })
$('.new').click(function(newGame) {
      location.reload();
    });
});