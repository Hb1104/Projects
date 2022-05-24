const DECREASE = document.getElementById("decreaseIn");
const INCREMENT = document.getElementById("increaseIn");
const BUTTON_SUB = document.getElementById("buttonDecrease");
const BUTTON_SUM = document.getElementById("buttonIncrease");
const RESULT = document.getElementById("result");


let value = 0;

BUTTON_SUB.addEventListener('click' , () => {

    if (DECREASE.value != 0) {
        RESULT.innerHTML = value + (- DECREASE.value);
        return value += (- DECREASE.value);
    } else {
        --value;
        RESULT.innerHTML = value;
        return value;
    }
});

BUTTON_SUM.addEventListener('click' , () => {
    
    if (INCREMENT.value != 0) {
        RESULT.innerHTML = value + Number(INCREMENT.value);
        return value += Number(INCREMENT.value);
    } else {
        ++value;
        RESULT.innerHTML = value;
        return value;
    }
});
