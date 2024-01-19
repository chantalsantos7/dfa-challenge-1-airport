//import statements
import Airport from "./airport.js";
import Plane from "./plane.js";

//Create an instance of Airport, passing in 15 as an argument for the airport's plane capacity
const airport = new Airport(15);
console.log("A new airport has been created for this demonstration.");

//Retrieve the current capacity
console.log(`The current airport capacity is: ${airport.getPlaneCapacity()}`);

//ability to change the airportCapacity
console.log("You can change the airport's capacity at any time with the 'setPlaneCapacity()' function.");
airport.setPlaneCapacity(2);
console.log(`The current airport capacity is: ${airport.getPlaneCapacity()}`);
console.log(`There are currently ${airport.getNumberOfPlanes()} planes at the airport.`)

//Create Plane objects which the Airport can interact with
const plane1 = new Plane("DF123");
const plane2 = new Plane("DF514");
const plane3 = new Plane("DF423");
console.log("Three planes have been created for this demonstration.");
console.log(`Plane 1: ${plane1.getId()}`);
console.log(`Plane 2: ${plane2.getId()}`);
console.log(`Plane 3: ${plane3.getId()}`);

//Instructing a plane to land at the airport
console.log(`The airport can instruct these planes to land at the airport.`);
airport.tellPlaneToLand(plane1);
airport.tellPlaneToLand(plane2);;
console.log(`There are currently ${airport.getNumberOfPlanes()} at the airport.`)

//Functions are provided to check whether the plane is at the airport or the airport is full before allowing it to land
console.log("Planes currently at airport:\n");
console.log("PlaneID\t\tArrayPosition\t\t\n");
airport.getPlanesCurrentlyAtAirport().forEach(plane => {
    console.log(`${plane.getId()}\t\t${airport.findPlane(plane)}`)
});
console.log(`Is Airport currently full? ${airport.isAirportFull() ? "yes": "no"}`);


airport.tellPlaneToLand(plane3)
console.log(airport.tellPlaneToLand(plane3));

//Show that a plane can be told to take off from the airport
airport.takeOffPlane(plane1);
console.log(`Plane ${plane1.getId()} has been told to take off.\n`)
console.log("Planes currently at airport:\n");
console.log("PlaneID\t\tArrayPosition\t\t\n");
airport.getPlanesCurrentlyAtAirport().forEach(plane => {
    console.log(`${plane.getId()}\t\t${airport.findPlane(plane)}`)
});
console.log(`Is Airport currently full? ${airport.isAirportFull() ? "yes": "no"}`);

//Show that a plane can only be told to take off if it is at the airport already
console.log(airport.takeOffPlane(plane3));