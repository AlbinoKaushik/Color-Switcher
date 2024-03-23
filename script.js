const body = document.querySelector("body")
let buttons = document.querySelector(".box")

buttons.forEach(button => {
    button.addEventListener("click",(button)=>{
        body.style.backgroundColor = `${button.innertext}`
        console.log(button);
    })    
});

