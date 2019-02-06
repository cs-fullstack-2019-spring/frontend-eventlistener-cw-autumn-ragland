// grab elements
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var titleElement = document.getElementById("titleID");
var pTag = document.getElementById("titletag");
//define functions
function changeTitle1() {
    pTag.textContent = "1"
}
function changeTitle2() {
    pTag.textContent = "2"
}
function blueBackground()
{
    titleElement.classList.add("blueBackground");
    titleElement.classList.remove("redBackground")
}
function redBackground()
{
    titleElement.classList.add("redBackground");
    titleElement.classList.remove("blueBackground")
}
//call functions
button1.addEventListener("click",changeTitle1);
button1.addEventListener("click",blueBackground);
button2.addEventListener("click",changeTitle2);
button2.addEventListener("click",redBackground);