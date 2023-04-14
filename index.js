// Code your solution in this file!
const returnFirstTwoDrivers = ( (array) => array.slice(0,2));

const returnLastTwoDrivers = ( (array) => array.slice(-2));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return ((num) => num * num);
}

const fareDoubler = ( (num) => {
    return 2 * num;
    createFareMultiplier(num);
});

const fareTripler = ( (num) => {
    return 3 * num;
    createFareMultiplier(num);
})

function selectDifferentDrivers(array, f){
    return f(array);    
}