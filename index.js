// fetch the elements from HTML into DOM
let textArea = document.querySelector(".textarea");
let totalChars = document.querySelector(".total-counter");
let remainChars = document.querySelector(".remaining-counter");
let heading = document.querySelector("h1");

// function that calculates characters and manipulates the heading
function update(){
    textUp = textArea.value.length;
    totalChars.innerHTML = textUp;
    remainChars.innerHTML = textArea.getAttribute("maxlength") - textUp;

    // change the heading when it reaches the limit
    limit = textArea.getAttribute("maxlength")
    if(textUp == limit){
        heading.innerText = `You have reached the limit of 150 characters😉`
    }
}

// trigger the counter when textarea is updated
document.addEventListener("keyup", update);