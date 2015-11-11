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
var win;

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
  tryPlayer1();
} //end buildDoor function

// var player1Pick = tryPlayer1();
// var player2Pick = tryPlayer2();
// var Complete = function playDoor(player1Pick, player2Pick)

function tryPlayer1() {
  alert(player1 + ' please try to select the shapes in the correct order. Doing so will unlock the door to the next level (Hint: The fleur-de-lis is the last shape you will need to press)!');
  clickShapes();
}

function tryPlayer2() {
  alert(player2 + ' please take your turn and try as well.');
  clickShapes();
}
//
// function playDoor(player1Pick, player2Pick) {
// if (player1Score == player2Score) {
//   console.log('we can go to the next level!');
//   }
// }

function clickShapes() {
var correctOrder = ['square', 'heart', 'circle', 'clover', 'diamond', 'fleur'];
var clickOrder = [];

$("#square").click("click.sq", function clickFirst(){
  $(this).css('background', 'rgb(47, 75, 224)');
  console.log('this square click works!!!');
  clickOrder.push('square');
});
$("#heart").click("click.", function clickSecond(){
$(this).css('background', 'rgb(47, 75, 224)');
console.log('this heart click works!!!');
  clickOrder.push('heart');
});
$("#circle").click("click.go3", function clickThird(){
  $(this).css('background', 'rgb(47, 75, 224)');
  console.log('this circle click works!!!');
  clickOrder.push('circle');
});
$("#clover").click("click", function clickFourth(){
  $(this).css('background', 'rgb(47, 75, 224)');
    console.log('this clover click works!!!');
    clickOrder.push('clover');
  });
$("#diamond").click("click.go5", function clickFifth(){
  $(this).css('background', 'rgb(47, 75, 224)');
  console.log('this diamond click works!!!');
  clickOrder.push('diamond');
  });
$("#fleur").click("click.go6", function clickSixth(){
  $(this).css('background', 'rgb(47, 75, 224)');
  console.log('this fleur click works!!!');
  clickOrder.push('fleur');
  console.log(clickOrder);
  console.log(correctOrder);
    if (Arrays.asList(clickOrder).containsAll(Arrays.asList(correctOrder))) {
      console.log('You can proceed to the next level!!');
      var win = 6;
    }
    else {
      alert('Sorry, please try again!')
      $('#wrapper div:eq(1)').removeAttr('style');
      $('#wrapper div:eq(2)').removeAttr('style');
      $('#wrapper div:eq(3)').removeAttr('style');
      $('#wrapper div:eq(4)').removeAttr('style');
      $('#wrapper div:eq(5)').removeAttr('style');
      $('#wrapper div:eq(6)').removeAttr('style');
      console.log(correctOrder);
    }
  })
} //end of clickShapes function
    // if (clickOrder.toString() == correctOrder.toString())
