class Airport {
    #planeCapacity;
    planesList = [];

    constructor(planeCapacity = 0)
    {
        this.#planeCapacity = planeCapacity;
    }

    landPlane(plane)
    {
        if (!plane || !plane.getId()) return;
        if (!this.findPlane(plane.getId()))
        {
            this.planesList.push(plane);
        }
    }

    findPlane(planeId)
    {
        for (let i = 0; i < this.planesList.length; i++)
        {
            if (this.planesList[i].getId() === planeId) return true;
        }
        return false;
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