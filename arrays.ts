const caMakers: string[] = [];
const carMakers = [' ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'], ['corolla'], ['volga']
];

//help with inference with extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push('100');

// help with map
carMakers.map((car: string): string => {
    return car;
});

// flexible types
const importantDates = [new Date, '2020-10-10'];