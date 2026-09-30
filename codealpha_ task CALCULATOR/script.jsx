const display = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("themeToggle");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            currentInput += value;
            display.textContent = currentInput;
        }

        else if (["+", "-", "×", "÷"].includes(value)) {
            if (currentInput === "") return;

            previousInput = currentInput;
            operator = value;
            currentInput = "";
        }

        else if (value === "AC") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.textContent = "0";
        }

        else if (value === "+/-") {
            if (currentInput !== "") {
                currentInput = (parseFloat(currentInput) * -1).toString();
                display.textContent = currentInput;
            }
        }

        else if (value === "%") {
            if (currentInput !== "") {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.textContent = currentInput;
            }
        }

        else if (value === "=") {
            if (previousInput === "" || currentInput === "") return;

            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            let result;

            switch (operator) {
                case "+":
                    result = prev + current;
                    break;

                case "-":
                    result = prev - current;
                    break;

                case "×":
                    result = prev * current;
                    break;

                case "÷":
                    result = prev / current;
                    break;
            }

            display.textContent = result;
            currentInput = result.toString();
            previousInput = "";
            operator = "";
        }
    });
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});