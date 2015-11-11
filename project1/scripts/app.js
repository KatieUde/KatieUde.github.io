$('document').ready(function(){

gameStart();

}); //end of doc.ready function

var player1;
var player2;
var shapes = [
          'square',
          'circle',
          'diamond',
          'fleur',
          'heart',
          'clover'
        ];
// var square = $('#wrapper div:eq(1)');
// var circle = $('#wrapper div:eq(2)');
// var diamond = $('#wrapper div:eq(3)');
// var fleur = $('#wrapper div:eq(4)');
// var heart = $('#wrapper div:eq(5)');
// var clover = $('#wrapper div:eq(6)');


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
      alert('Thank you ' + player1);
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
    // console.log('my loop is working');
    var shapeNames = "<div></div>";
    $('#wrapper').append(shapeNames);
  }
    var square = $('#wrapper div:eq(1)');
    square.attr('id', 'square');
    var circle = $('#wrapper div:eq(2)');
    circle.attr('id', 'circle');
    var diamond = $('#wrapper div:eq(3)');
    diamond.attr('id', 'diamond');
    var fleur = $('#wrapper div:eq(4)');
    fleur.attr('id', 'fleur');
    var heart = $('#wrapper div:eq(5)');
    heart.attr('id', 'heart');
    var clover = $('#wrapper div:eq(6)');
    clover.attr('id', 'clover');
  clickShapes();
} //end buildDoor function

function clickShapes() {
$("#square").on("click", function(){
  $(this).css('background', 'rgb(47, 75, 224)');
  $("#square.background").fadeOut("slow");
  console.log('this square click works!!!');
});
$("#circle").on("click", function(){
  $(this).css('background', 'rgb(47, 75, 224)');
  console.log('this cicle click works!!!');
});
$("#diamond").on("click", function(){
  $(this).css('background', 'rgb(47, 75, 224)');
  console.log('this diamond click works!!!');
  });
$("#fleur").on("click", function(){
  $(this).css('background', 'rgb(47, 75, 224)');
      console.log('this fleur click works!!!');
  });
$("#heart").on("click", function(){
  $(this).css('background', 'rgb(47, 75, 224)');
    console.log('this heart click works!!!');
  });
$("#clover").on("click", function(){
  $(this).css('background', 'rgb(47, 75, 224)');
    console.log('this clover click works!!!');
  });
} //end of clickShapes function
