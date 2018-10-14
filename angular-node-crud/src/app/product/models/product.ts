export class Product{
    _id: string
    name: string;
    price: number;
    constructor(id, name, price){
        this._id = id;
        this.name = name;
        this.price = price        
    }
}