function toFahrenheit(celsius) {
    // Calculate Fahrenheit using the conversion formula
    let fahrenheit = (celsius * 9 / 5) + 32;
    
    // Round to two decimal places
    fahrenheit = fahrenheit.toFixed(2);
    
    // Return the result as a number (not a string)
    return parseFloat(fahrenheit);
}

// Prompt the user for input and display the result
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
