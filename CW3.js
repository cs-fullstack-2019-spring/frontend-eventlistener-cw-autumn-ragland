//grab element
var h2tag = document.getElementsByClassName("h2check");
//define function
function fontchange(e) {
    e.target.style.fontSize = "10px"
}
//iterate for function
for (var i=0;i<h2tag.length;i++)
{
    h2tag[i].addEventListener("click", fontchange)
}