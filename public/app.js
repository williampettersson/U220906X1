console.log('JS does work!');

build();

function build() {
   
    const divsettings = document.createElement('div');
    divsettings.setAttribute('id', 'settings');
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
    app.appendChild(divcalculator);


    const titleCalc = document.createElement('h1');
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
    colorGrey.innerText = 'Grey'
    dropDownColor.appendChild(colorGrey);
    
    const colorBlue = document.createElement('option');
    colorBlue.setAttribute('value', 'blue');
    colorBlue.innerText = 'Blue'
    dropDownColor.appendChild(colorBlue);

    const colorYellow = document.createElement('option');
    colorYellow.setAttribute('value', 'yellow');
    colorYellow.innerText = 'Yellow'
    dropDownColor.appendChild(colorYellow);
    
    settings.appendChild(dropDownColor);

}

function buildCalculator() {

    
    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1');
    numberInput1.setAttribute('name', 'number1');
    calculator.appendChild(numberInput1);

    
    const addition = document.createElement('button');
    addition.setAttribute('id', 'addition');
    addition.innerText = '+';
    calculator.appendChild(addition);

    
    const subtraction = document.createElement('button');
    subtraction.setAttribute('id', 'subtraction');
    subtraction.innerText = '-' ;
    calculator.appendChild(subtraction);

    
    const multiply = document.createElement('button');
    multiply.setAttribute('id', 'multiply');
    multiply.innerText = '*';
    calculator.appendChild(multiply);

    
    const division = document.createElement('button');
    division.setAttribute('id', 'division');
    division.innerText = '*';
    calculator.appendChild(division);

  
    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    numberInput2.setAttribute('name', 'number2');
    calculator.appendChild(numberInput2); 

    
    const clear = document.createElement('button');
    clear.setAttribute('id', 'clear');
    clear.innerText = 'Clear';
    calculator.appendChild(clear);


}

