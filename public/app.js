console.log('JS does work!');

build();

function build() {
   
    const divsettings = document.createElement('div');
    divsettings.setAttribute('id', 'settings');
    divsettings.className = 'greycolor';
    app.appendChild(divsettings);

    
    const titleSettings = document.createElement('h1');
    titleSettings.innerHTML = 'Settings';
    divsettings.appendChild(titleSettings);

    //Gör knappen, i app div, som ska gömma settings div
    const HideShowButton = document.createElement('button');
    HideShowButton.setAttribute('id', 'HSButton')
    HideShowButton.innerText = 'Hide/Show';
    //Kolla om settings div är synlig eller ej
    HideShowButton.onclick = () => settings.hidden = !settings.hidden;
    app.appendChild(HideShowButton);

   
    const divcalculator = document.createElement('div');
    divcalculator.setAttribute('id', 'calculator');
    divcalculator.className = 'greycolor';
    app.appendChild(divcalculator);


    const titleCalc = document.createElement('h1');
    titleCalc.setAttribute('id', 'titlecalc');
    titleCalc.innerHTML = 'Calculator';
    divcalculator.appendChild(titleCalc);

    buildSettings(settings);
    buildCalculator(calculator);

}

function buildSettings() {

    const dropDownColor = document.createElement('select');
    dropDownColor.setAttribute('id', 'dropDownColor');
    dropDownColor.innerText = 'Color';
    
    const colorGrey = document.createElement('option');
    colorGrey.setAttribute('value', 'grey');
    colorGrey.innerText = 'Dark Slate Grey';
    dropDownColor.appendChild(colorGrey);
    
    const colorBlue = document.createElement('option');
    colorBlue.setAttribute('value', 'blue');
    colorBlue.innerText = 'Light Sky Blue';
    dropDownColor.appendChild(colorBlue);

    const colorYellow = document.createElement('option');
    colorYellow.setAttribute('value', 'yellow');
    colorYellow.innerText = 'Yellow Green';
    dropDownColor.appendChild(colorYellow);

    dropDownColor.onchange = (event) => {
        calculator.classList.remove("grey");
        calculator.classList.remove("yellow");
        calculator.classList.remove("blue");
        calculator.classList.add(event.target.value);
    }

    settings.appendChild(dropDownColor);

    const dropDownFont = document.createElement('select');
    dropDownFont.setAttribute('id', 'dropDownFont');
    dropDownFont.innerText = 'Font';

    const font12 = document.createElement('option');
    font12.setAttribute('value', 'small');
    font12.innerText = '12px'
    dropDownFont.appendChild(font12);

    const font16 = document.createElement('option');
    font16.setAttribute('value', 'medium');
    font16.innerText = '16px'
    dropDownFont.appendChild(font16);

    const font20 = document.createElement('option');
    font20.setAttribute('value', 'large');
    font20.innerText = '20px'
    dropDownFont.appendChild(font20);

    dropDownFont.onchange = (event) => {
        results.className = event.target.value;
    }
    
    settings.appendChild(dropDownFont);

}

function buildCalculator() {

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'results');
    textarea.disabled = true;

    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1');
    numberInput1.setAttribute('type', 'number');
    numberInput1.setAttribute('name', 'number1');
    calculator.appendChild(numberInput1);

    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    numberInput2.setAttribute('type', 'number');
    numberInput2.setAttribute('name', 'number2');
    calculator.appendChild(numberInput2); 

    
    const addition = document.createElement('button');
    addition.setAttribute('id', 'addition');
    addition.className = 'buttons';
    addition.innerText = '+';
    addition.onclick = () => {
        textarea.append(numberInput1.value + " + " + numberInput2.value + " = " +
        (Number(numberInput1.value) + Number(numberInput2.value)) + "\n");
    }
    calculator.appendChild(addition);

    
    const subtraction = document.createElement('button');
    subtraction.setAttribute('id', 'subtraction');
    subtraction.className = 'buttons';
    subtraction.innerText = '-' ;
    subtraction.onclick = () => {
        textarea.append(numberInput1.value + " - " + numberInput2.value + " = " +
        (Number(numberInput1.value) - Number(numberInput2.value)) + "\n");
    }
    calculator.appendChild(subtraction);

    
    const multiply = document.createElement('button');
    multiply.setAttribute('id', 'multiply');
    multiply.className = 'buttons';
    multiply.innerText = '*';
    multiply.onclick = () => {
        textarea.append(numberInput1.value + " * " + numberInput2.value + " = " +
        (Number(numberInput1.value) * Number(numberInput2.value)) + "\n");
    }
    calculator.appendChild(multiply);

    
    const division = document.createElement('button');
    division.setAttribute('id', 'division');
    division.className = 'buttons';
    division.innerText = '/';
    division.onclick = () => {
        textarea.append(numberInput1.value + " / " + numberInput2.value + " = " +
        (Number(numberInput1.value) / Number(numberInput2.value)) + "\n");
    }
    calculator.appendChild(division);

  
    

    
    calculator.appendChild(textarea);
    
    const clear = document.createElement('button');
    clear.setAttribute('id', 'clear');
    clear.className = 'buttons';
    clear.innerText = 'Clear';
    clear.onclick = () => textarea.innerHTML = '';
    calculator.appendChild(clear);


}

