function toFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return parseFloat(fahrenheit);
}
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
