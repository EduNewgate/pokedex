import { BerryFlavor } from "../berries/BerryFlavor";
import { ContestName } from "./ContestName";


export class ContestType {

    id: number;
    name: string;
    berry_flavor: BerryFlavor;
    names: ContestName[];

    constructor() {

    }
}