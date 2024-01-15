class Airport {
    #planeCapacity;
    planesList = [];

    constructor(planeCapacity = 0)
    {
        this.#planeCapacity = planeCapacity;
    }

    landPlane(plane)
    {
        if (!plane.getId()) return;
        this.planesList.push(plane);
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
}

export default Airport;