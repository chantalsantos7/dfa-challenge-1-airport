class Airport {
    #planeCapacity;
    #planesList = [];

    constructor(planeCapacity = 0)
    {
        
        this.#planeCapacity = planeCapacity;
    }

    tellPlaneToLand(plane)
    {
        if (!plane || !plane.getId()) return;
        if (!this.isPlaneAtAirport(plane) && !this.isAirportFull())
        {
            this.#planesList.push(plane);
        }
        else
        {
            return `Plane ${plane.getId()} cannot land.`
        }
    }

    takeOffPlane(plane)
    {
        if (this.isPlaneAtAirport(plane))
        {
            this.#planesList = this.#planesList.filter(el => el !== plane);
        }
        else {
            return `Plane ${plane.getId()} is not at the airport, so cannot be told to take off.`
        }
        
    }

    isPlaneAtAirport(planeToFind)
    {
        return this.#planesList.includes(planeToFind);
    }

    findPlane(plane)
    {
        for (let i = 0; i < this.#planesList.length; i++)
        {
            if (this.#planesList[i] === plane) return i;
        }
        //console.log(`Plane ${plane.getId()} is not currently at the airport.`);
        return `Plane ${plane.getId()} is not currently at the airport.`;
    }

    getNumberOfPlanes()
    {
        return this.#planesList.length;
    }

    getPlanesCurrentlyAtAirport()
    {
        return this.#planesList;
    }

    setPlaneCapacity(newPlaneCapacity)
    {
        if (newPlaneCapacity > 0 && Number.isInteger(newPlaneCapacity))
        {
            this.#planeCapacity = newPlaneCapacity;
        }  
    }

    getPlaneCapacity()
    {
        return this.#planeCapacity;
    }

    isAirportFull()
    {
        if (this.#planesList.length === this.#planeCapacity) return true;
        return false;
    }
}

export default Airport;