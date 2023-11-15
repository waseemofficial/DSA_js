const carMileageAnalyze = require("../../DSA_70/High Order Array Methods/carMileageAnalyze");
const carsData = [
  {
    make: "toyota",
    model: "camry",
    year: 2020,
    mileage: 30800.22,
  },
  {
    make: "honda",
    model: "civic",
    year: 2019,
    mileage: 32000.12,
  },
  {
    make: "chevrolet",
    model: "impala",
    year: 2021,
    mileage: 17500,
  },
  {
    make: "audi",
    model: "R8",
    year: 2020,
    mileage: 13000,
  },
  {
    make: "tesla",
    model: "model 3",
    year: 2018,
    mileage: 50000,
  },
];
test("analyze the mileage of a car", () => {
  const analyze = carMileageAnalyze(carsData);
  expect(analyze.totalMileage).toBeCloseTo(143300.34);
  expect(analyze.averageMileage).toBeCloseTo(28660.07);
  expect(analyze.highestMileageCar).toEqual({
    make: "tesla",
    model: "model 3",
    year: 2018,
    mileage: 50000,
  });
  expect(analyze.lowestMileageCar).toEqual({
    make: "audi",
    model: "R8",
    year: 2020,
    mileage: 13000,
  });
});
