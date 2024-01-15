//import statements
import { assertEquals, assertBooleanFalse, assertBooleanTrue, it } from "./testing-framework/test-framework.js";
import Airport from "../src/airport.js";
import Plane from "../src/plane.js";

//Test 1
console.log("***Airport Capacity Tests***\n");
it("should return correct airport capacity", () => {
    //Arrange
    let airport = new Airport();
    let expectedOutput = 0;

    //Act
    let actualOutput = airport.getPlaneCapacity();

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

it("should not allow plane capacity to be set to a negative number", () => {
    //Arrange
    let airport = new Airport();
    let expectedOutput = 0;

    //Act
    airport.setPlaneCapacity(-1);
    let actualOutput = airport.getPlaneCapacity();

    //Assert
    assertEquals(actualOutput, expectedOutput);

});

it("should not allow plane capacity to be set to a non-int number value", () => {
    //Arrange
    let airport = new Airport(15);
    let expectedOutput = 15;
   
    //Act
    airport.setPlaneCapacity(13.4);
    let actualOutput = airport.getPlaneCapacity();
    
    //Assert
    assertEquals(actualOutput, expectedOutput);
   });

it("should not allow plane capacity to be set to a non-number value", () => {
    let airport = new Airport(13);
    let expectedOutput = 13;

    airport.setPlaneCapacity("hi");
    let actualOutput = airport.getPlaneCapacity();

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

console.log("\n***Plane Landing Tests***\n");
it("should be able to tell a plane to land at the airport", () => {
    //Arrange
    let airport = new Airport(5);
    let plane = new Plane();
    let expectedOutput = 1;
    let actualOutput;

    //Act
    airport.landPlane(plane);
    actualOutput = airport.planesList.length;

    //Assert
    assertEquals(actualOutput, expectedOutput);
});



