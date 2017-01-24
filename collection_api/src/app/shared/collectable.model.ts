// creation of a typescript class to type an object
export class Collectable {
    // properties of the class
    public description: string;
    public type: string;

    // constructor to initialize the properties
    constructor(description: string, type: string) {
        this.description = description;
        this.type = type;
    }
}