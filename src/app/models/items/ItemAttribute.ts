import { Item } from "./Item";
import { Name } from './../utility/Name';
import { Description } from './../utility/Description';

export class ItemAttribute {

    id: number;
    name: string;
    items: Item[];
    names: Name[];
    description: Description[];

    constructor() {

    }
}