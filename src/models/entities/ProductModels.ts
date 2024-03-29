import { IEntityBase } from "../IEntity";
import { statusTypeEnum } from "../enums/statusTypeEnum";

export interface TitleObjectType {
  name: string;
  icon: string;
  inventoryChildren?: TitleObjectType[];
  children: {
    name: string;
    icon: string;
    children?: {
      name: string;
      icon: string;
    }[];
  }[];
}

export interface FavoriteObjectType {
  name: string;
  icon: string;
}

export class Product implements IEntityBase {
  constructor() {
    this.id = 0;
    this.key = 0
    this.title = "";
    this.price = 0;
    this.description = "";
    this.categoryName = "";
    this.category = {
      id: 0,
      name: "",
    };
    this.images = [];
    this.rating = 0;
    this.status = statusTypeEnum.Active;
    this.quantity = 0;
    this.icon = "";
    this.name = "";
    this.count = 0;
  }
  id: number | string;
  key: number;
  title: string;
  price: number;
  description: string;
  categoryName:string;
  category: {
    id: number;
    name: string;
  };
  images: ProductImage[];
  rating: number;
  status: number;
  quantity: number;
  icon: string;
  name: string;
  count:number | null
}

export class ProductImage implements IEntityBase {
  constructor() {
    (this.id = Math.random()), (this.status = statusTypeEnum.Active);
    this.fullPath = "";
    this.url = "";
  }
  id: number;
  status: number;
  fullPath: string;
  url: string;
}
