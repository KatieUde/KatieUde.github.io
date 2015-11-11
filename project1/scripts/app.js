$('document').ready(function(){

gameStart();

}); //end of doc.ready function

var player1;
var player2;
var shapes = [
          'Square',
          'Circle',
          'Diamond',
          'Fleur',
          'Heart',
          'Clover'
        ];

function gameStart(){
  // fade's in door
  // prompts user to enter player one name
  //
  $('#start_button').click(function(){
    $('h1').fadeOut("slow");
    $('#main').fadeOut("slow",function() {
      console.log('end of fade out');
      initWrapper();
    }); //start_button CLICK end of function
  });
}
      // $('#wrapper').fadeIn(400).delay(400);
      // }) promise done end of function
  //  buildDoor();
 // gameStart end of function

function initWrapper(){
  $('#wrapper').css('background-image', 'url(http://imgur.com/rgBCXTH.jpg)');
  $('#wrapper').css('display', 'none');
  $('#wrapper').fadeIn(1000, function(){
    //console.log('end of fade in');
    createPlayer();
  });

}

function createPlayer() {
  var userInput = prompt('Please enter the name for Player One.');
    if (userInput != undefined) {
      var player1 = userInput;
      alert('Thank you ' + player1 + 'this is player1');
    }

    var userInput2 = prompt('Please enter the name for Player Two.');
    if (userInput2 != undefined) {
      var player2 = userInput2;
      alert('Thank you ' + player2);
    }
    buildDoor();
} //createPlayer end of function

function buildDoor(){
  for(var i = 0; i < shapes.length; i++) {
    console.log('my loop is working');
    var shapeNames = "<div>" + shapes[i] + "</div>";
    $('#wrapper').append(shapeNames);
  }
}
