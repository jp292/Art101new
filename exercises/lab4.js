// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "rental bike", "friend car", "personal car"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 18,
    print: "Greenery",
    hasMiddleDoor: true,
    drivers: ["Nice guy", "Lady", "Other guy"],
};
    let megaSentence;

    megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[4] + "</p>";
    megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
    $("#output").html(megaSentence);