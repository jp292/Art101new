 $("#creature").text("DVD");
 
$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $("#creature").css("background", "blue");
});

$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); },
  function() { $("#status").text("You left me :("); }
);

$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
$("#creature").css({
  transform: "scale(1.2)",
  background: "red"
});
});

$(document).keydown(function(event) {
  $("#status").text("You pressed: " + event.key);
});

$(document).ready(function(){
  $("p").on("click", function(){
    $(this).hide();
  });
});

function moveCreature() {
    let maxX = $(window).width() - $("#creature").width();
    let maxY = $(window).height() - $("#creature").height();
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    $("#creature").animate(
      { left: newX, top: newY },
      2000, 
      moveCreature 
    );
  }

  $("#creature").css("position", "absolute"); 
  moveCreature();
