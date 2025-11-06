function convertUnit() {
  const value = parseFloat(document.getElementById("value").value);
  const fromUnit = document.getElementById("unit").value;
  const toUnit = document.getElementById("convertTo").value;
  const resultElement = document.getElementById("result");

  if (isNaN(value)) {
    resultElement.textContent = "Please enter a valid number!";
    return;
  }

  // Conversion to meters (base unit)
  let valueInMeters;
  switch (fromUnit) {
    case "cm": valueInMeters = value / 100; break;
    case "m": valueInMeters = value; break;
    case "km": valueInMeters = value * 1000; break;
  }

  // Convert from meters to target unit
  let convertedValue;
  switch (toUnit) {
    case "cm": convertedValue = valueInMeters * 100; break;
    case "m": convertedValue = valueInMeters; break;
    case "km": convertedValue = valueInMeters / 1000; break;
  }

  resultElement.textContent = `${value} ${fromUnit} = ${convertedValue} ${toUnit}`;
}
