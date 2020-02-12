import { Move } from "./Move";
import { Description } from './../utility/Description';
import { Name } from './../utility/Name';

export class MoveDamageClass {
    
    id: number;
    name: string;
    descriptions: Description[];
    moves: Move[];
    names: Name[];

    constructor() {

    }
}