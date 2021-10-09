var carMakers = ['ford', 'toyata', 'chevy'];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'], ['corolla'], ['camaro']
];
//Help with inference when extracting values
var carOne = carMakers[0];
var myCar = carMakers.pop();
//Can prevent us from adding incompatibles values to the array
// Help with 'map'
carMakers.map(function (car) {
    return car.toLocaleLowerCase();
});
//Multiple(Flexible) types in arrays
var importantDates = [new Date()];
importantDates.push('sample');
importantDates.push('2020-10-09');
console.log(importantDates);
