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
var correctOrder = ['square', 'heart', 'circle', 'clover', 'diamond', 'fleur'];
var clickOrder = [];
var currentPlayer = 1;

var hiddenImages = ['chalice', 'jester', 'shield', 'dragon', 'sword', 'key', 'fork', 'books', 'feather', 'crystal', 'cauldron', 'wand', 'star'];

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
      player1 = userInput;
      alert('Thank you ' + player1 + '.');
    }

    var userInput2 = prompt('Please enter the name for Player Two.');
    if (userInput2 != undefined) {
      player2 = userInput2;
      alert('Thank you ' + player2 + '.');
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
  alert(player1 + ', please try to select the shapes in the correct order. Doing so will unlock the door to the next level (Hint: The fleur-de-lis is the last shape you will need to press)!');
  clickShapes();
}
//
// function playDoor(player1Pick, player2Pick) {
// if (player1Score == player2Score) {
//   console.log('we can go to the next level!');
//   }
// }

function clickShapes() {

$('#square').unbind('click');
$('#heart').unbind('click');
$('#circle').unbind('click');
$('#diamond').unbind('click');
$("#clover").unbind('click');
$("#fleur").unbind('click');


$("#square").click("click.sq", function clickFirst(){
  $(this).css('background-image', 'url(http://i.imgur.com/gqPquSsm.png)');
  console.log('this square click works!!!');
  clickOrder.push('square');
});
$("#heart").click("click.", function clickSecond(){
$(this).css('background-image', 'url(http://i.imgur.com/HG7uhKH.png)');
console.log('this heart click works!!!');
  clickOrder.push('heart');
});
$("#circle").click("click.go3", function clickThird(){
  $(this).css('background-image', 'url(http://i.imgur.com/VFptiDJ.png)');
  console.log('this circle click works!!!');
  clickOrder.push('circle');
});
$("#clover").click("click", function clickFourth(){
  $(this).css('background-image', 'url(http://i.imgur.com/1jgIeRI.png)');
    console.log('this clover click works!!!');
    clickOrder.push('clover');
  });
$("#diamond").click("click.go5", function clickFifth(){
  $(this).css('background-image', 'url(http://i.imgur.com/Iru7WpL.png)');
  console.log('this diamond click works!!!');
  clickOrder.push('diamond');
  });
$("#fleur").click("click.go6", function clickSixth(){
  $(this).css('background', 'url(http://i.imgur.com/9Dcg0NX.png)');
  console.log('this fleur click works!!!');
  clickOrder.push('fleur');
  console.log(clickOrder);
  console.log(correctOrder);
  yesNo(clickOrder, correctOrder);
  })
  function yesNo(clickOrder, correctOrder) {
    if (clickOrder.toString() == correctOrder.toString()) {
      console.log('You can proceed to the next level!!');
      for (var i = 0; i < 6; i++) {
        clickOrder.pop();
      }
      if (currentPlayer == 1) {
        currentPlayer = 2;
        tryPlayer2();
      } else if (currentPlayer == 2) {
        // show winning stuff
        alert('Game Over!!!!!');
        changeBackground();
      }

      $('#wrapper div:eq(1)').removeAttr('style');
      $('#wrapper div:eq(2)').removeAttr('style');
      $('#wrapper div:eq(3)').removeAttr('style');
      $('#wrapper div:eq(4)').removeAttr('style');
      $('#wrapper div:eq(5)').removeAttr('style');
      $('#wrapper div:eq(6)').removeAttr('style');
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
      for (var i = 0; i < 6; i++) {
      clickOrder.pop();
      }
    }
  }
} //end of clickShapes function

function tryPlayer2() {
  console.log(correctOrder);
  alert(player2 + ', please take your turn now and try as well.');
  clickShapes();
}

function changeBackground() {
  $('#square').detach();
  $('#heart').detach();
  $('#circle').detach();
  $('#clover').detach();
  $('#diamond').detach();
  $('#fleur').detach();
  $('#wrapper').css('background-image', '');
  $('#wrapper').css('background-image', 'url(http://i.imgur.com/GH6pbWD.jpg)');
  loadHiddenObjects();
}

function loadHiddenObjects() {
  for (var i = 0; i < hiddenImages.length; i++) {
    console.log('my loop is working');
    var hiddenObjects = "<div></div>";
    $('#wrapper').append(hiddenObjects);
  }
  var chalice = $('#wrapper div:eq(1)');
  chalice.attr('id', 'hidden_chalice');
  var jester = $('#wrapper div:eq(2)');
  jester.attr('id', 'hidden_jester');
  var shield = $('#wrapper div:eq(3)');
  shield.attr('id', 'hidden_shield');
  var dragon = $('#wrapper div:eq(4)');
  dragon.attr('id', 'hidden_dragon');
  var sword = $('#wrapper div:eq(5)');
  sword.attr('id', 'hidden_sword');
  var key = $('#wrapper div:eq(6)');
  key.attr('id', 'hidden_key');
  var fork = $('#wrapper div:eq(7)');
  fork.attr('id', 'hidden_fork');
  var books = $('#wrapper div:eq(8)');
  books.attr('id', 'hidden_books');
  var feather = $('#wrapper div:eq(9)');
  feather.attr('id', 'hidden_feather');
  var crystal = $('#wrapper div:eq(10)');
  crystal.attr('id', 'hidden_crystal');
  var cauldron = $('#wrapper div:eq(11)');
  cauldron.attr('id', 'hidden_cauldron');
  var wand = $('#wrapper div:eq(12)');
  wand.attr('id', 'hidden_wand');
  var star = $('#wrapper div:eq(13)');
  star.attr('id', 'hidden_star');
  beginHidden();
}

function beginHidden() {
  var inventory = "<footer>Items to Find:</footer>";
  $('#wrapper').append(inventory);
  var findImages = ['dragon', 'key', 'wand', 'feather', 'books', 'crystal', 'swords'];

  alert('Congratulations on making it to the next level ' + player1 + ' & ' + player2 + '!');

  for (var i = 0; i < findImages.length; i++) {
    console.log('my loop is working');
    var inventoryList = "<ul class='items'>" + findImages[i] + "</ul>";
    $('footer').append(inventoryList);
  }
}
