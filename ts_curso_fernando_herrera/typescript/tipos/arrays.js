"use strict";
(function () {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.push(11);
  console.log(numbers);
  var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
  villians.forEach(function (villan) { return console.log(villan.toLowerCase()); });
})()