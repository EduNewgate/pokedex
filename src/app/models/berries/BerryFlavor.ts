import { FlavorBerryMap } from "./FlavorBerryMap";
import { ContestType } from './../contests/ContestType';
import { Name } from './../utility/Name';

export class BerryFlavor {

    id: number;
    name: string;
    berries: FlavorBerryMap[];
    contest_type: ContestType;
    names: Name[];

    constructor() {

    }
}