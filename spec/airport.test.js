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


it("isAirportFull should return true when the airport has the maximum number of planes", () => {
    //Arrange
    let airport = new Airport(1);
    let plane = new Plane("DF2314");

    //Act
    airport.landPlane(plane);
    let actualOutput = airport.isAirportFull();

    //Assert
    assertBooleanTrue(actualOutput);
});

it("isAirportFull should return false when the airport does not have the maximum number of planes", () => {
    //Arrange
    let airport = new Airport(2);
    let plane = new Plane("DF2314");

    //Act
    airport.landPlane(plane);
    let actualOutput = airport.isAirportFull();

    //Assert
    assertBooleanFalse(actualOutput);
});

console.log("\n***Plane Landing Tests***\n");
it("should be able to tell a plane to land at the airport", () => {
    //Arrange
    let airport = new Airport(5);
    let plane = new Plane("DF123");
    let expectedOutput = 1;
    let actualOutput;

    //Act
    airport.landPlane(plane);
    actualOutput = airport.getNumberOfPlanes();

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

it("should test that the plane supplied has landed at the airport", () => {
    //Arrange
    let airport = new Airport(5);
    let plane = new Plane("DF123");
    let expectedOutput = 0;
    let actualOutput;

    //Act
    airport.landPlane(plane);
    actualOutput = airport.findPlane(plane); //modify something to find the plane

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

it("should not allow a plane without an ID to land at the airport", () => {

    //Arrange
    let airport = new Airport(5);
    let plane = new Plane();
    let expectedOutput = 0;
    let actualOutput;

    //Act
    airport.landPlane(plane);
    actualOutput = airport.getNumberOfPlanes();

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

it("should not allow a null Plane to land at the airport", () => {
    //Arrange
    let airport = new Airport(5);
    let plane = null;
    let expectedOutput = 0;
    let actualOutput;

    //Act
    airport.landPlane(plane);
    actualOutput = airport.getNumberOfPlanes();

    //Assert
    assertEquals(actualOutput, expectedOutput);
});


it("should not let a plane land at the airport if it is already there", () => {
    //Arrange
    let airport = new Airport(2);
    let plane1 = new Plane("DF123");
    airport.landPlane(plane1);
    let expectedOutput = 1;

    //Act
    airport.landPlane(plane1);
    let actualOutput = airport.getNumberOfPlanes();

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

it("should not let a plane land at the airport if the airport is full", () => {
    //Arrange
    let airport = new Airport(2);
    let plane1 = new Plane("DF123");
    let plane2 = new Plane("DF234");
    let plane3 = new Plane("DF456");
    let expectedOutput = airport.getPlaneCapacity();

    //Act
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
    let actualOutput = airport.getNumberOfPlanes();

    //Assert
    assertEquals(actualOutput, expectedOutput);
});

//     let expectedOutput;
//     let actualOutput;

//     //Act
//     airport.landPlane(plane1);
//     airport.landPlane(plane2);
//     airport.landPlane(plane3);
//     actualOutput = airport.planesList.length;

//     //Assert
//     assertEquals(actualOutput, expectedOutput);
