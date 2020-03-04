import { PokemonAbility } from '../pokemon/PokemonAbility';
import { PokemonStat } from '../pokemon/PokemonStat';
import { PokemonCard } from './PokemonCard';
import { AdjacentPokemon } from './AdjacentPokemon';

export class PokemonDetail {

    pkmCard: PokemonCard;
    previous: AdjacentPokemon;
    next: AdjacentPokemon;
    weight: number;
    height: number;
    abilities: PokemonAbility[];
    stats: PokemonStat[];

    constructor() { }
}