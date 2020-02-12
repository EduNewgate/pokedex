import { Pokemon } from "./Pokemon";
import { VersionGroup } from "../games/VersionGroup";
import { Name } from "../utility/Name";
import { PokemonFormSprites } from './PokemonFormSprites';

export class PokemonForm {

    id: number;
    name: string;
    order: number;
    form_order: number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: Pokemon;
    sprites: PokemonFormSprites;
    version_group: VersionGroup;
    names: Name[];
    form_names: Name[];

    constructor() {

    }
}