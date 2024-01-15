class Airport {
    #planeCapacity;

    constructor(planeCapacity = 0)
    {
        this.#planeCapacity = planeCapacity;
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