class Airport {
    #planeCapacity;
    #planesList = [];

    constructor(planeCapacity = 0)
    {
        this.#planeCapacity = planeCapacity;
    }

    landPlane(plane)
    {
        if (!plane || !plane.getId()) return;
        if (!this.isPlaneAtAirport(plane.getId()))
        {
            this.#planesList.push(plane);
        }
    }

    isPlaneAtAirport(planeId)
    {
        if (this.#planesList.filter((plane) => plane.planeId === planeId).length === 1) return true;
        // for (let i = 0; i < this.#planesList.length; i++)
        // {
        //     if (this.#planesList[i].getId() === planeId) return true;
        // }
        return false;
    }

    findPlane(planeId)
    {
        for (let i = 0; i < this.#planesList.length; i++)
        {
            if (this.#planesList[i].getId() === planeId) return i;
        }
        return -1;
    }

    getNumberOfPlanes()
    {
        return this.#planesList.length;
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