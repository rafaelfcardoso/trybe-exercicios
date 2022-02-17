// import getRandomNumber from "./tests"
const service = require("./service.js");

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

describe("getRandomNumber", () => {

  it("Tests if the function has been called", () => {
    service.getRandomNumber = jest.fn();
    service.getRandomNumber();
    expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
    /* service.getRandomNumber.mockReset() */
  })

  it( "should return the function with a default param of 10", () => {
    // Mock the return value of the function to be 10
    service.getRandomNumber.mockReturnValue(10)
    // Validate that the return value is 10
    
    expect(service.getRandomNumber()).toBe(10);
    // expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
  })
})