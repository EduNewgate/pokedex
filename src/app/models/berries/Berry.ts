import { BerryFlavorMap } from './BerryFlavorMap';
import { BerryFirmness } from './BerryFirmness';
import { Item } from './../items/Item';
import { Type } from './../pokemon/Type';

export class Berry {

    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: BerryFirmness;
    flavors: BerryFlavorMap[];
    item: Item;
    natural_gift_type: Type;

    constructor() {

    }
}