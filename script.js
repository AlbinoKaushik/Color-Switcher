const body = document.querySelector("body")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")
const black = document.querySelector("#black")


red.addEventListener("click",()=>{
    body.style.backgroundColor = "red";
    console.log("red");
})
green.addEventListener("click",()=>{
    body.style.backgroundColor = "green";
    console.log("green");
})
blue.addEventListener("click",()=>{
    body.style.backgroundColor = "blue";
    console.log("blue");
})
black.addEventListener("click",()=>{
    body.style.backgroundColor = "black";
    console.log("black");
})


