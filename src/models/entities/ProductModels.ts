import {IEntityBase} from "../IEntity"
import {statusTypeEnum} from "../enums/statusTypeEnum";

export class Product implements IEntityBase {
    constructor(){
        this.id = 0;
        this.title = "";
        this.price = 0;
        this.description = "";
        this.category = "";
        this.image = "";
        this.rating = 0;
        this.status = statusTypeEnum.Active

    }
    id: number
    title:string
    price:number
    description:string
    category:string
    image:string
    rating:number
    status:number

}