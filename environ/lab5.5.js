function askNumber(whatNumber){
let userNumber = prompt("Guess 1-10?");
if (userNumber == whatNumber) {
    $("#output").html("You got it!");
}
else { 
$("#output").html("Noooope");
}

}
$("#good-button").click(function () {
    askNumber(5);
});



var count = 0;
let colorCount = 0;
var colors = ["Purple", "Blue", "Pink", "Yellow"];


function makeImage (imageName) {
 if (colors[colorCount] == "Purple") {
 $("body").append("<img width=100 src='images/Orchid.png'>");
}


}

// the button part
$("#needy-button").click(function () {
   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   $("body").css("background-color", colors[colorCount]);

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});