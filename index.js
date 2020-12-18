const title = document.querySelector("#title");
const age = prompt("why?");

function handleClick(){
    if (title.style.color == "blue"){
        title.style.color = "white";
    }
    else {
        title.style.color = "blue";
    }
    
}

title.addEventListener("click", handleClick);