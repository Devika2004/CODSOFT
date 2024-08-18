// script.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = null;
    let previousInput = "";

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                operator = null;
                previousInput = "";
                display.innerText = "";
            } else if (value === "=") {
                if (operator && previousInput !== "" && currentInput !== "") {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.innerText = currentInput;
                    previousInput = "";
                    operator = null;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = "";
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });
});
