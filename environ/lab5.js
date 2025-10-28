function askNumber(whatNumber) {
let userNumber = prompt("Guess 1-10?");
if (userNumber == whatNumber) {
    $("#output").html("You got it!");
}
if (userNumber == whatNumber) {
    $("#output").html("You got it!");
}
}

$("#good-button").click(function () {
    askNumber(5);
});

