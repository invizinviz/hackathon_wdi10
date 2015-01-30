$(document).ready(function(){
  console.log("hello");
  $('#button').on('click', function(){
    console.log("click");
  });
  $('#Fight').on('click', function(){
    console.log("fight");
    tweets1 = parseInt($('#tweets1').text());
    tweets2 = parseInt($('#tweets2').text());
    followers1 = parseInt($('#followers1').text());
    followers2 = parseInt($('#followers2').text());
    favourites1 = parseInt($('#favourites1').text());
    favourites2 = parseInt($('#favourites2').text());
    var tweetsWinner = calculate(tweets1, tweets2);
    var followersWinner = calculate(followers1, followers2);
    var favouritesWinner = calculate(favourites1, favourites2);
    var array = [tweetsWinner, followersWinner, favouritesWinner];
    var false_count = array.filter(function(value){
        return value === false;
    }).length;
    console.log(false_count);
    var true_count = array.filter(function(value){
        return value === true;
    }).length;
    console.log(true_count);
    setTimeout(
      function(){
        setTimeout(
          function(){
            animate(followersWinner, "bounceIn");

          $('#favouritesheader').show();
          },
          1000
          );
        remove(followersWinner, "bounceIn");
      $('#followersheader').show();
      },
      3000
      );
    setTimeout(
      function(){
      remove(followersWinner, "bounceIn");
      animate(favouritesWinner, "bounceIn");
      $('#favouritesheader').show();
      },
      5000
      );
    setTimeout(
      function(){
        if (true_count > false_count){
          $('#player1wins').show();
        }else{
          $('#player2wins').show();
        }
      },
      7000
      );
    $('#tweetsheader').show();
    animate(tweetsWinner, "bounceIn");

    // animate(favouritesWinner, "bounceOutRight").delay('fast');

  //   $("#player1").animate({
  //     opacity: 0.25,
  //     left: "+=50",
  //     height: "toggle"
  //   }, 5000, function() {
    
  // });

  });
});

var calculate = function(first, second){
  if (first > second){
    return true;
  }else {
    return false;
  }
};

var animate = function(winner, animation){
  if (winner == true){
    $('#player1').addClass(animation);
  }else{
    $('#player2').addClass(animation);
    console.log('player2');
  }
};

var remove = function(winner, animation){
  if (winner == true){
    $('#player1').removeClass(animation);
  }else{
    $('#player2').removeClass(animation);
    console.log('player2');
  }
};