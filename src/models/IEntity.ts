import { statusTypeEnum } from "./enums/statusTypeEnum";

export interface DbResponse <TEntity> {
    data: TEntity[];
    count: number;
    sum: number;
}

export interface IEntityType<TType> extends IEntityBase {
    type: TType;
}
export type IEntityBase = BaseEntity<statusTypeEnum>

export interface BaseEntity<T> {
    id:number;
    status: T;
}