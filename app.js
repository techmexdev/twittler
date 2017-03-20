// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
$(document).ready(function(){
var generateTweet = function(){
    var $body = $('body');
    //$body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var user = tweet.user;
      var $time = $('<p class=timeStamp></p>');
      var $tweet = $('<div class="tweet" id="'+user+'"></div>');
      var $user = $('<button class="user"></button>');

      $tweet.text(tweet.message);
      $user.text('@' + tweet.user + ':');
      $time.text(tweet.created_at);

      $tweet.appendTo($body);
      $user.prependTo($tweet);
      $time.appendTo($tweet);
      index -= 1;
    }
    sideBar();
  };
  
  var sideBar = function(){
    var $bar = $('.leftBar');
    var friend = streams.users;
    var $friendList = $('<ul class="friends">Friend\'s Activity</ul>');
    $bar.text('Welcome to Twittler, Fliko!');
    var $img = $('<img class="icon" src="icon.jpg"></img>');
    $img.appendTo($bar);
    $friendList.appendTo($bar);
    for (var i in friend){
      $('.friends').append('<li>'+ i +': ' + friend[i].length+'</li>');
    }
  };


  generateTweet();


  var intervalOn = true;
  $('.user').on('click',function(){
    var user = $(this).text();
    var us = user.split('').splice(1,user.length - 2).join('');
    var who = $('.tweet').not('#'+us);

    who.slideToggle('fast',function(){
      intervalOn = !intervalOn;
      if(intervalOn){
        interval = setInterval(generateTweet,20000);
      }else{
        clearInterval(interval);
      }
    });
  });
  var interval = setInterval(generateTweet,20000);

 

}); 
        

// .hide user tweets that you are not looking for, then animate them to the
//top of the page