const inputbox = document.getElementById('input-box');
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {




        const value = button.textContent;
        if (value === 'AC') {


            expression = "";
            inputbox.value = "";
        }
        else if (value === "Del") {
            expression = expression.slice(0, -1);
            inputbox.value = expression;}
        else if (value === "=") {
            
            try {
                expression = eval(expression).toString();
                inputbox.value = expression;
            } catch (error) {

                inputbox.value = "Error";
                expression = "";
            }
        }    
            else {
                expression += value;
                inputbox.value = expression;
            }


        });

});