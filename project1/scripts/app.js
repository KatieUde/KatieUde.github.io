$(document).ready(function(){

gameStart();

}); //end of doc.ready function

function gameStart(){
$('#start_button').click(function(){
  $('h1, #main').fadeOut("slow",function() {
    $('#wrapper').css({'background-image': 'url(http://imgur.com/rgBCXTH.jpg)'});
    $('#wrapper').fadeIn(400).delay(400).promise().done(function createPlayer1(name) {
          var userInput = prompt('Please enter the name for Player One.');
                if (userInput == 'name') {
                  alert('Thank you ' + name);
                  var Player1 = name;
                }
            })
            if (player1 = 'true') {
            function createPlayer2() {
            var userInput2 = prompt('Please enter the name for Player Two.');
              var player2 = userInput2;
                if (userInput2 !== null||'') {
                alert('Thank you ' + player2);
              }
              }
            }
          })
        })
      }
// var player1 = {
//   name: '',
//   score: '',
// createPlayer1: function() {
// var userInput = prompt('Please enter the name for Player One.');
// if (userInput !== null||'') {
//   player1.name == userInput;
//   alert('Thank you' + player1.name);
//       }
// else  {
//   alert('Please try re-entering Player one\'s name');
//       }
//     }
//   }
// }
