const diceGame = require("../DSA_70/diceGame");
describe("Dice Game", () => {
  test("simulation of a  Dice Game", () => {
    const numSimulations = 100;
    const simulationResult = diceGame(numSimulations);

    expect(simulationResult).toHaveLength(numSimulations);
    simulationResult.forEach((result) => {
      const { dice1, dice2, sum, result: gameResult } = result;
      expect(dice1).toBeGreaterThanOrEqual(1);
      expect(dice2).toBeLessThanOrEqual(6);
    });
  });
});
