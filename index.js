const returnFirstTwoDrivers = function (drivers){
    const twoDrivers = drivers.slice(0, 2);
    
    return twoDrivers;
 };

 const returnLastTwoDrivers = function (drivers) {
    const twoDrivers = drivers.slice((drivers.length - 2, 2))

    return twoDrivers;
 };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    return function (num) {
        return Math.pow(num, 2);
    };
}

function fareDoubler(num) {
    return num * 2;
}

function fareTripler(num) {
    return num * 3;
}

function fetchSpecifiedDrivers(drivers, functioN) {
    if (functioN === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    };
    if (functioN === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    };
}