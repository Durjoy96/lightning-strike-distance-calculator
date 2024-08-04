document.addEventListener("DOMContentLoaded", () => {
    let userInput = document.getElementById("inputNum");
    let output = document.querySelector(".output");
    let loader = document.querySelector(".loader");
    let minMaxAlert = document.querySelector(".min-max-sec");

    userInput.addEventListener("input", () => {
        let value = userInput.value; //user input value
        
        let meters = value * 343; //user value multiple by 343 meters 

        let steps = meters / 0.75; //0.75 meters = 1 steps

        let removeDecimalSteps = parseInt(steps); //remove decimal value

        output.innerHTML = `${removeDecimalSteps}<span>Steps</span>`;

        minMaxAlert.style.display = "none"; //alert hide

        if(value < 0 || value > 900) {
            minMaxAlert.style.display = "block"; //alert show
            output.innerHTML = "--<span>Steps</span>";
            loader.style.borderColor = "#dfe5eb"; //default color
        }else if(removeDecimalSteps <= 667) {
            loader.style.borderColor = "#FA8072"; //immediate danger
        }else if(removeDecimalSteps <= 2000) {
            loader.style.borderColor = "#E8AC41"; //high danger
        }else if(removeDecimalSteps <= 4000) {
            loader.style.borderColor = "#FBEC5D"; //moderate danger
        }else if(removeDecimalSteps >= 4000) {
            loader.style.borderColor = "#50C878"; //low danger
        }
    });
});