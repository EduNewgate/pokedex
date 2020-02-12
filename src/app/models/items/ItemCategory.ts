import { Item } from "./Item";
import { Name } from './../utility/Name';
import { ItemPocket } from './ItemPocket';

export class ItemCategory {

    id: number;
    name: string;
    items: Item[];
    names: Name[];
    pocket: ItemPocket;

    constructor() {

    }
}