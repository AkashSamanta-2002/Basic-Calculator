let display = document.querySelector('.display');
let buttonsContainer = document.querySelector('.buttonsContainer');
let flag = false;

function handleEvent() {
    buttonsContainer.addEventListener('click',(e)=>{
        if(e.target.className!=='buttonsContainer'){
            let buttonText = e.target.innerText;
            handleCalculation(buttonText)
        }
    })
}

function handleCalculation(buttonText){
    if(buttonText==='=') calculateVal(display.innerText);
    else if(buttonText==='C') clearDisplay();
    else if (display.innerText==='Error' || display.innerText==='Infinity' || flag===true) showNumber(buttonText);
    else appendVal(buttonText);
}

function showNumber(buttonText) {
    display.innerText = buttonText;
    flag = false;
}

function clearDisplay(){
    display.innerText = '0';
}

function appendVal(buttonText){
    if(display.innerText==='0') display.innerText = buttonText; 
    else display.innerText = `${display.innerText}${buttonText}`
}

function calculateVal(displayText) {
    flag = true;
    if(displayText==='Error') {
        display.innerText = `Error`;
        return;
    }
    try {
        display.innerText =  eval(displayText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function handleKeyEvent(){
    document.addEventListener('keydown',(e)=>{
        if(e.code==='Enter' || e.code==='NumpadEnter') calculateVal(display.innerText);
        else if(e.code.includes('Numpad') || e.code.includes('Digit')) {
            let key = e.key;
            handleCalculation(key);
        }
    })
}

handleEvent();
handleKeyEvent()