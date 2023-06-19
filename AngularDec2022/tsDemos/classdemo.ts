 export const pi=3.14;
 export class circle
{
    private radius:number;
    constructor(radius:number)
    {
        this.radius=radius;
    }
    getArea()
    {
        return pi*this.radius*this.radius;
    }
}

