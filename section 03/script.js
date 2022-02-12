// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// ! add prettier
// ! debug code with warn

const measureKelvin = function () {
  const measurement = {
    temp: 'temp',
    unit: 'celsius',
    //! bug
    value: Number(prompt('Degrees in celsius: '))
  };
  //   console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
