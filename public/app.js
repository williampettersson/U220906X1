console.log('JS does work!');

build();
calculator();
settings();

function build() {
    const targetSettings = document.getElementById('app');
    const settings = document.createElement('div');
    settings.setAttribute('id', 'settings');
    targetSettings.appendChild(settings);

    const targetDivSettings = document.getElementById('settings');
    const divsettings = document.createElement('h1');
    divsettings.innerHTML = 'Settings';
    targetDivSettings.appendChild(divsettings);


    const targetCalc = document.getElementById('app');
    const calculator = document.createElement('div');
    calculator.setAttribute('id', 'calculator');
    targetCalc.appendChild(calculator);

    const targetDivCalc = document.getElementById('calculator');
    const divcalc = document.createElement('h1');
    divcalc.innerHTML = 'Calculator';
    targetDivCalc.appendChild(divcalc);

}

function settings() {

    const btnColor = document.getElementById('settings');
    const color = document.createElement('button');
    color.setAttribute('id', 'color');
    color.innerText = 'Color';
    btnColor.appendChild(color);


}

function calculator() {

    const targetNumberInput1 = document.getElementById('calculator');
    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1');
    numberInput1.setAttribute('name', 'number1');
    targetNumberInput1.appendChild(numberInput1);

    const btnAddition = document.getElementById('calculator');
    const addition = document.createElement('button');
    addition.setAttribute('id', 'addition');
    addition.innerText = '+';
    btnAddition.appendChild(addition);

    const btnSubtraction = document.getElementById('calculator');
    const subtraction = document.createElement('button');
    subtraction.setAttribute('id', 'subtraction');
    subtraction.innerText = '-';
    btnSubtraction.appendChild(subtraction);

    const btnMultiply = document.getElementById('calculator');
    const multiply = document.createElement('button');
    multiply.setAttribute('id', 'multiply');
    multiply.innerText = '*';
    btnMultiply.appendChild(multiply);

    const btnDivision = document.getElementById('calculator');
    const division = document.createElement('button');
    division.setAttribute('id', 'division');
    division.innerText = '*';
    btnDivision.appendChild(division);

    const targetNumberInput2 = document.getElementById('calculator');
    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    numberInput2.setAttribute('name', 'number2');
    targetNumberInput2.appendChild(numberInput2); 

    const btnClear = document.getElementById('calculator');
    const clear = document.createElement('button');
    clear.setAttribute('id', 'clear');
    clear.innerText = 'Clear';
    btnClear.appendChild(clear);
}

