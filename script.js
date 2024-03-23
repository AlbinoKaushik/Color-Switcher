const body = document.querySelector("body")
let buttons = document.querySelectorAll(".box")

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        body.style.backgroundColor = button.innerHTML
        console.log(button.innerHTML);    
    })    
});

