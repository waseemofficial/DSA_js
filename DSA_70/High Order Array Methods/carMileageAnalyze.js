/**
 * 1, calculate the average milage of all cars
 * 2, find the car with the highest mileage
 * 3, find the car with the lowest mileage
 * 4, calculate the total mileage of all the cars
 */

function carMileageAnalyze(carData) {
  const totalMileage = carData.reduce((sum, car) => {
    return sum + car.mileage;
  }, 0);
  const averageMileage = totalMileage / carData.length;
  const highestMileageCar = carData.reduce((highest, car) => {
    return car.mileage > highest.mileage ? car : highest;
  }, carData[0]);
  const lowestMileageCar = carData.reduce((lowest, car) => {
    return car.mileage < lowest.mileage ? car : lowest;
  }, carData[0]);
  return {
    totalMileage,
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
  };
}
module.exports = carMileageAnalyze;
