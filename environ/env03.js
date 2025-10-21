// declaring an array 
let myFish = ["a Gold Fish", "a Shark", "a Scuba Diver", "a Coral Reef",];
// declaring an object with name myFavouriteCommute
let myFish1 = {
    color: "Orange",
    route: 2,
    type: "Gold Fish",
};

let myFish2 = {
    color: "Blue",
    route: 15,
    type: "Sharky",
};

let myFish3 = {
    color: "Tan",
    route: 34,
    type: "Human",
};

let myFish4 = {
    color: "Multi-color",
    route: 4000,
    type: "Reef",
};

let megaSentence;

    megaSentence = "<p>My array of fish in my aquarium consists of: " + myFish + "</p>";
    megaSentence = megaSentence + "<p> My favourite fish possesses such characteristics: color - " + myFish1.color + ", age " + myFish1.route + ", the type: " + myFish1.type +"My second favorite is: color - " + myFish2.color + ", age " + myFish2.route + ", the type: " + myFish2.type + "</p>";
    $("#output").html(megaSentence);