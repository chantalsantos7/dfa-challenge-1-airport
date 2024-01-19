# Domain Models and Test Plan

## User Stories

1. As an air traffic controller, I want to be able to see the capacity of the airport at any one time, so I know the number of planes that can land at the airport

| Objects | Properties | Messages | Outputs |
| ----------- | ----------- | ----------- | ----------- |
| **Airport** | planeCapacity@int <br> planes@Array[@Plane] | getAirportCapacity() | @int |
| **Plane** | id@string |  | |

***Tests***

- Test that correct airport capacity is returned.

2. As an airport executive, I want to be able to change the maximum plane capacity of the airport, in case we need to build an extension or downsize.

| Objects | Properties | Messages | Outputs |
| ----------- | ----------- | ----------- | ----------- |
| **Airport** | planeCapacity@int | changeAirportCapacity(@int) | @Void |

***Tests***

- Test that an error is thrown if negative value is passed as a parameter
- Test that capacity change function does not accept non-int values passed as a parameter
- Test that capacity change function does not accept non-number values passed as a parameter

3. As an air traffic controller, I want to be able to instruct a plane to land at the airport, so it's flight can be completed.

| Objects | Properties | Messages | Outputs |
| ----------- | ----------- | ----------- | ----------- |
| **Airport** | planes@Array[@Plane] | tellPlaneToLand(@Plane) | @Void |
| **Plane** | id@string |  | |

***Tests***

- Test that a plane can land at airport - planesArray length increased by 1
- Test that specified plane is now at airport - planeID can be found in the planesArray
- Test that a null Plane can't be added to the array
- Test that a Plane without an ID can't be added to the array
- test that the plane is not added to the array again if it's already in the array
- test that planes cannot land at the airport when it is full

As an air traffic controller, I want to see when the airport is full, so I know whether additional planes can land.

| Objects | Properties | Messages | Outputs |
| ----------- | ----------- | ----------- | ----------- |
| **Airport** | planeCapacity@int <br> planes@Array[@Plane] | isAirportFull() | @Boolean |

***Tests***

- test that function returns true when the airport is full
- test that function returns false when the airport is not full

As an air traffic controller, I want to be able to instruct a plane to take off from the airport, in order to free up space at the airport.

| Objects | Properties | Messages | Outputs |
| ----------- | ----------- | ----------- | ----------- |
| **Airport** | planes@Array[@Plane] | tellPlaneToTakeOff(@Plane) | @Void |
| **Plane** | id@string |  | |

***Tests***

- test that plane has taken off from airport - planesArray length decreased by 1
- test that the plane that takes off was the plane that was told to take off - plane ID can't be found in array any more
- test that array doesn't change if the planeID supplied is not already at the airport

6. As an air traffic controller, I want to check if a plane is already at the airport, so I can either tell it to take off or allow it to land.

| Objects | Properties | Messages | Outputs |
| ----------- | ----------- | ----------- | ----------- |
| **Airport** | planes@Array[@Plane] | isPlaneAtAirport(@Plane) | @Boolean |
| **Plane** | id@string |  | |

***Tests***

- test that function returns true when the plane is at the airport - plane's ID can be found in the planesArray
- test that function returns false when the plane is not at the airport - plane's ID cannot be found in the planesArray
