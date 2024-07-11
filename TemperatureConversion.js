document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let tempValue = parseFloat(document.getElementById('tempValue').value);
    let tempUnit = document.getElementById('tempUnit').value;

    let celsius, fahrenheit, kelvin;

    switch(tempUnit) {
        case 'Celsius':
            celsius = tempValue;
            fahrenheit = (tempValue * 9/5) + 32;
            kelvin = tempValue + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (tempValue - 32) * 5/9;
            fahrenheit = tempValue;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            celsius = tempValue - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = tempValue;
            break;
    }

    document.getElementById('celsius').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvin').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
});
