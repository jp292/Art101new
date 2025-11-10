// a variable for storing names

//when the button is clicked (event)

$("#add-creature").click(function() {

    let crName=$ ("#crName").val();
    $("#creature-list").append("<div>"+crName+"</div>");
    
    
    });