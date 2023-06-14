const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

const roundToTwoDP = (num) => {
  return num.toFixed(2);
};


const celsiusToFaAndKe = () => {
  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
  

  fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
  

};
const fahrenheitToCeAndKe = () => {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  
  celsiusInput.value = roundToTwoDP(celsiusTemp);
  
};
const kelvinToCeAndFa = () => {
  const kelvinTemp = parseFloat(kelvinInput.value);
  const celsiusTemp = kelvinTemp - 273;
  

  celsiusInput.value = roundToTwoDP(celsiusTemp);
  fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
};


const main = () => {
  celsiusInput.addEventListener('input', celsiusToFaAndKe);
  fahrenheitInput.addEventListener('input', fahrenheitToCeAndKe);
  
};

main();
