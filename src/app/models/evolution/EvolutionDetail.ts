import { Item } from './../items/Item';
import { EvolutionTrigger } from './EvolutionTrigger';
import { Move } from './../moves/Move';
import { Type } from './../pokemon/Type';
import { PokemonSpecies } from './../pokemon/PokemonSpecies';

export class EvolutionDetail {

    item: Item;
    trigger: EvolutionTrigger;
    gender: number;
    held_item: Item;
    known_move: Move;
    known_move_type: Type;
    location: Location;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    needs_overworld_rain: boolean;
    party_species: PokemonSpecies;
    party_type: Type;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: PokemonSpecies;
    turn_upside_down: boolean;

    constructor() {

    }
}