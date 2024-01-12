//import statements
import { assertEquals, assertBooleanFalse, assertBooleanTrue, it } from "./testing-framework/test-framework.js";
import Airport from "../src/airport.js";

//Test 1

it("Test 1 - tests that correct airport capacity is returned.", () => {
    //Arrange
    let airport = new Airport();
    let expectedOutput = 0;

    //Act
    let actualOutput = airport.planeCapacity;

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

