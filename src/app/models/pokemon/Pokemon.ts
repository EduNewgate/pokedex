import { PokemonAbility } from './PokemonAbility';
import { PokemonForm } from './PokemonForm';
import { VersionGameIndex } from './../utility/VersionGameIndex';
import { PokemonHeldItem } from './PokemonHeldItem';
import { PokemonMove } from './PokemonMove';
import { PokemonSpecies } from './PokemonSpecies';
import { PokemonStat } from './PokemonStat';
import { PokemonType } from './PokemonType';

export class Pokemon {

    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: PokemonForm[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSpecies;
    stats: PokemonStat[];
    types: PokemonType[];

    constructor() {

    }
}