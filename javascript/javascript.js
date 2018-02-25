
//https://codepen.io/zoite/full/GJKRxZ
// https://wind-bow.gomix.me/twitch-api 
// /users/:user, /channels/:channel, /streams/:stream , ?callback=?
// console.log("https://wind-bow.gomix.me/twitch-api/users/" + array[3]);
// console.log("https://wind-bow.gomix.me/twitch-api/channels/" + array[3]);
// console.log("https://wind-bow.gomix.me/twitch-api/streams/" + array[3]);

var array = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

array.forEach(function(listItem) {

  function buildLink (channel, type) {
    return "https://wind-bow.gomix.me/twitch-api/" + type + "/" + channel + "?callback=?"; 
  };
  
    $.getJSON(buildLink(listItem,"streams"), function(data) {
    var isOn, status;
    if (data.stream === null) {
      isOn = "Offline";
      } else  {
      isOn = "Online" ; //for status. if null, no stream. problem if account doenst exist.
      status = data.stream.channel.status;
      };

        $.getJSON(buildLink(listItem,"channels"), function(data) {
        var name = data.display_name;
        var logo = data.logo;
        var url = data.url;
        var htmlTextOn = 
        '<div class="frame"><img src="' + logo + '" alt="User Thumbnail"><p id="user"><a href="'+ url + '">' + name + 
        '</a></p><p id="info">' + status +'</p><p id="statusY">' + isOn + '</p></div>' ;
        var htmlTextOff = 
        '<div class="frame"><img src="' + logo + '" alt="User Thumbnail"><p id="user"><a href="'+ url + '">' + name + 
        '</a></p><p id="info">' +'</p><p id="statusN">' + isOn + '</p></div>' ;

        isOn === "Online" ? $(".container").prepend(htmlTextOn) : $(".container").append(htmlTextOff);
      
});
    });


  });





$(document).ready(function() {
}); //end






