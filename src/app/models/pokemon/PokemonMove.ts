import { Move } from "../moves/Move";
import { PokemonMoveVersion } from './PokemonMoveVersion';

export class PokemonMove {

    move: Move;
    version_group_details: PokemonMoveVersion[];

    constructor() {

    }
}