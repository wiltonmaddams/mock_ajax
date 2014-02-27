$(document).ready(function(){

  $('#get_color').on('click', function(event) {
    event.preventDefault();

  var url = $(this).attr("action");
  var data = $(this).serialize("action");


  $.post(url, data, function(serverResponse, status, request) {
    var random_li = Math.floor((Math.random()* $('ul li').length ));
    $("ul li:eq(" + random_li + ")").css("background-color", serverResponse)
    });
  });
});


