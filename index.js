// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
  // return the first two of the array
  // if array of 10 drivers, how to return just the
  return driverArray.slice(0, 2);
};

const returnLastTwoDrivers = (driverArray) => {
  return driverArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// how to invoke one of the func from the selecting drivers array???

// selectingDrivers[0](['Sally', "bob"]) === returnFirstTwoDrivers("sally...")

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return multiplier * fare;
  };
};

// is the same as the createFare, but you have to pass in the multiplier everytime
const fareMultiplierMoreArgs = (multiplier, fare) => {
  return multiplier * fare;
};

const fareDoubler = createFareMultiplier(2);
// const fareDoubler = (fare) =>  2 * fare
const fareTripler = createFareMultiplier(3);
// const fareTripler = (fare) =>  3 * fare

const selectDifferentDrivers = (driverArray, driverSelectFunc) => {
  //   if (driverSelectFunc == returnFirstTwoDrivers) {
  //     return returnFirstTwoDrivers(driverArray);
  //   } else if (driverSelectFunc == returnLastTwoDrivers) {
  //     return returnLastTwoDrivers(driverArray);
  //   }

  return driverSelectFunc(driverArray);
};

// console.log("TESTING");
// selectDifferentDrivers(["drea", "nick", "garret"], console.log);

// console.log(
//   selectDifferentDrivers(["drea", "nick", "garret"], returnFirstTwoDrivers)
// );
// console.log(
//   selectDifferentDrivers(["drea", "nick", "garret"], selectingDrivers[1])
// );

// const sayHi = (arr) => {
//   return arr.forEach((x) => console.log({ x }));
// };
// console.log(selectDifferentDrivers(["drea", "nick", "garret"]), sayHi);
