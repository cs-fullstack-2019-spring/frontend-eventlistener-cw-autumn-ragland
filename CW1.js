//grab elements from HTML
var clickme = document.getElementById("teacherbutton");
//define function to prompt until quit input
function wouldYouLikeToQuit() {
    var userInput = prompt("Would you like to quit?");
    while (userInput !== "n")
    {
        userInput = prompt("Would you like to quit? Enter n to quit")
    }
}
//call function when button is clicked
clickme.addEventListener("click", wouldYouLikeToQuit);
