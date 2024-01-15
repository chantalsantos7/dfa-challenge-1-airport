export default class Plane {
    #id;

    constructor(id)
    {
        this.#id = id;
    }

    getId()
    {
        return this.#id;
    }
}