import { Move } from "./Move";
import { Description } from './../utility/Description';
import { Name } from './../utility/Name';

export class MoveTarget {

    id: number;
    name: string;
    descriptions: Description[];
    moves: Move[];
    names: Name[];

    constructor() {

    }
}