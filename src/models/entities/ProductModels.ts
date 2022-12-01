import {IEntityBase} from "../IEntity"
import {statusTypeEnum} from "../enums/statusTypeEnum";

export class Product implements IEntityBase {
    constructor(){
        this.id = 0;
        this.title = "";
        this.price = 0;
        this.description = "";
        this.category = {
            id:0,
            name:"",
        };
        this.images = "";
        this.rating = 0;
        this.status = statusTypeEnum.Active
        this.quantity = 0;
    }
    id: number
    title:string
    price:number
    description:string
    category:{
        id:number,
        name:string
    }
    images:string
    rating:number
    status:number
    quantity: number;
}
