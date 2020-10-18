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


// div.addEventListener('click', e => {
//     if(e.target.tagName === 'BUTTON') {
//         calculation(e.target.innerText)
//     }
// })

buttons.forEach((button)=>button.addEventListener('click', e=> {
    calculation(e.target.value);
}, true))

document.addEventListener('keydown', e => {
    if ((e.key).match(/[0-9%\/\.*\-+\(\)=]|Backspace|c|с|Enter/)) calculation(e.key)
})

function calculation(value) {
    if (value.match(/=|Enter/)) {
        try {
            document.activeElement.blur();
            if (currentOperandTextElement.textContent !== '') {
                let histVal = currentOperandTextElement.textContent;
                console.log(math.evaluate(currentOperandTextElement.textContent));
                currentOperandTextElement.textContent = math.evaluate(currentOperandTextElement.textContent).toFixed(5);
                console.log(currentOperandTextElement.textContent);
                if(currentOperandTextElement.textContent.match(/\./)){
                    while(currentOperandTextElement.textContent[currentOperandTextElement.textContent.length-1]=="0"){
                        currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0,currentOperandTextElement.textContent.length-1);
                    }
                    if(currentOperandTextElement.textContent[currentOperandTextElement.textContent.length-1]=="."){
                        currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0,currentOperandTextElement.textContent.length-1);
                    }
                }
                if(currentOperandTextElement.textContent!==""){
                    previousOperandTextElement.textContent = histVal + "=" + currentOperandTextElement.textContent;
                    currentOperandTextElement.textContent="";
                }
            }
        } catch (e){
            console.log(e);
            let oldValue = previousOperandTextElement.textContent;
            let newValue = 'недопустимое выражение';

            previousOperandTextElement.textContent = newValue;
            const timer = setTimeout(() => {
                previousOperandTextElement.textContent = oldValue;
                clearTimeout(timer);
            },1000);
        }
    } else if (value.toLowerCase().match(/^clearall$|^c$|^с$/)) {
        console.log(value);
        currentOperandTextElement.textContent = '';
    } else if (value.match(/DEL|Backspace/)) {
        currentOperandTextElement.textContent = currentOperandTextElement.textContent.substring(0, currentOperandTextElement.textContent.length - 1);
    }else {
        if(currentOperandTextElement.textContent.length && value.match(/[*/!%+-]/) && currentOperandTextElement.textContent[currentOperandTextElement.textContent.length-1].match(/[*/!%+-]/)){
            currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0,currentOperandTextElement.textContent.length-1);
        }
        // if(value.match(/\./) && !currentOperandTextElement.textContent[currentOperandTextElement.textContent.length-1].match(/[0-9]{1}/)){
        //     currentOperandTextElement.textContent += "0 ";
        // }
        currentOperandTextElement.textContent += value;
    }
}