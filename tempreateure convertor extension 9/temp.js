const number = document.getElementById('number');
const selection = document.getElementById('selection');
const displayContent = document.getElementById('displayContent');
const convertButton = document.getElementById('convert');

function convertingCToF(C){
    return (1.8 * C) + 32;
}

function convertingFToC(F){
    return (F - 32) / 1.8;
}

function convertingCToK(C){
    return C + 273.15;
}

function convertingFToK(F){
    return ((F - 32) / 1.8) + 273.15;
}

function convertTemperature() {

    const selectionValue = selection.value;
    const numberValue = parseFloat(number.value);

    if (isNaN(numberValue)) {
        displayContent.textContent = "Please enter a valid number";
        return;
    }

    let result;

    if(selectionValue === 'C to F'){
        result = convertingCToF(numberValue);
        displayContent.textContent =
        `${numberValue}°C is equal to ${result.toFixed(2)}°F`;

    } else if(selectionValue === 'F to C'){
        result = convertingFToC(numberValue);
        displayContent.textContent =
        `${numberValue}°F is equal to ${result.toFixed(2)}°C`;

    } else if(selectionValue === 'C to K'){
        result = convertingCToK(numberValue);
        displayContent.textContent =
        `${numberValue}°C is equal to ${result.toFixed(2)} K`;

    } else if(selectionValue === 'F to K'){
        result = convertingFToK(numberValue);
        displayContent.textContent =
        `${numberValue}°F is equal to ${result.toFixed(2)} K`;
    }
}

// selection.addEventListener('change', convertTemperature);
convertButton.addEventListener('click', convertTemperature);
// number.addEventListener('input', convertTemperature);