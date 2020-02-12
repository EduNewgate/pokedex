import { Item } from './../items/Item';
import { Move } from './../moves/Move';
import { VersionGroup } from './../games/VersionGroup';

export class Machine {

    id: number;
    item: Item;
    move: Move;
    version_group: VersionGroup;

    constructor() {

    }
}