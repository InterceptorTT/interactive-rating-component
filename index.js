const buttons = document.querySelectorAll("#buttons button");
const submit = document.querySelector("#submit");
const main = document.querySelector(".main");
const greetings = document.querySelector("#greetings");
const selectedChoice = document.querySelector("#select-choice");

function choose(){
    buttons.forEach((btn) => {
   
        btn.addEventListener("click", () => {
            let vote = 0;
            buttons.forEach((btns) => {
                btns.style.background = "hsl(213, 19%, 18%)";
            })
            btn.style.background = "hsl(217, 12%, 63%)";
            vote = btn.innerHTML;
            submit.addEventListener("click", () => {
                main.style.display = "none";
                greetings.style.display = "block";
                selectedChoice.innerHTML = `You selected ${vote} out of 5`;
            })
        })
    })
}

choose()
















console.log(buttons)