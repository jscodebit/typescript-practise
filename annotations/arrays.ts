const carMakers: string[] = ['ford', 'toyata', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'], ['corolla'], ['camaro']
];

//Help with inference when extracting values
const carOne = carMakers[0];
const myCar = carMakers.pop();
//Can prevent us from adding incompatibles values to the array

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toLocaleLowerCase();
})

//Multiple(Flexible) types in arrays
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('sample');
importantDates.push('2020-10-09');
console.log(importantDates);