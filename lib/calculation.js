`use strict`;


document.onkeydown = function (e) {
    if(e.key.toLowerCase()=='r' && e.ctrlKey){
        location.reload;
        return true
    } 
    return false;
}

const previousOperandTextElement = document.querySelector('[data-previous-expression]');
const currentOperandTextElement = document.querySelector('[data-current-expression]');
const div = document.querySelector(".calculator-grid");
const buttons = document.querySelectorAll("[data-calcButton]");

document.addEventListener('keydown', e => {
    if ((e.key).match(/[0-9%\/*\-+\(\)=]|Backspace|c|с|Enter/)) calculation(e.key)
})
