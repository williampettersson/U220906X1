console.log('JS does work!');

build();

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
