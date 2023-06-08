function append(value){
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay(){
    const display = document.getElementById("display");
    display.value = "";
}

function calculate(){
    const display = document.getElementById("display");
    const expression = display.value;
    try {
        const result = eval (expression);
        display.value = result;
    } catch (error){
        display.value = "Error";
    }
}