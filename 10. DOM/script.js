var button=document.getElementById("button");
var input=document.getElementById("input");
var ul=document.querySelector("ul");

function calcLength() {
    return input.value.length;
}

function addListElement() {
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

button.addEventListener("click", function() {
    if(calcLength()>0) {
        addListElement();
    }
})

input.addEventListener("keypress", function(event) {
    if(calcLength()>0 && event.charCode===13) {
        addListElement();
    }
})