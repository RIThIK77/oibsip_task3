function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;
    const resultField = document.getElementById('result');
    
    if (isNaN(temp)) {
        resultField.value = "Please enter a valid number!";
        return;
    }

    let result;

    switch (scale) {
        case 'fahrenheit':
            result = (temp - 32) * 5/9;  // Fahrenheit to Celsius
            resultField.value = `${result.toFixed(4)} °C`;
            break;
        case 'celsius':
            result = (temp * 9/5) + 32;  // Celsius to Fahrenheit
            resultField.value = `${result.toFixed(4)} °F`;
            break;
        case 'kelvin':
            result = temp - 273.15;  // Kelvin to Celsius
            resultField.value = `${result.toFixed(4)} °C`;
            break;
        default:
            resultField.value = "Conversion error!";
    }
}
