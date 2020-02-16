import { PokemonType } from '../pokemon/PokemonType';
import { PokemonAbility } from '../pokemon/PokemonAbility';
import { PokemonStat } from '../pokemon/PokemonStat';

export class PokemonCard {

    name: String;
    weight: number;
    height: number;
    types: PokemonType[];
    abilities: PokemonAbility[];
    stats: PokemonStat[];

    constructor() { }
}