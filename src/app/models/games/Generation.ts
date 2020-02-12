import { Ability } from './../pokemon/Ability';
import { Region } from './../locations/Region';
import { Name } from './../utility/Name';
import { Move } from './../moves/Move';
import { PokemonSpecies } from './../pokemon/PokemonSpecies';
import { Type } from './../pokemon/Type';
import { VersionGroup } from './VersionGroup';

export class Generation {

    id: number;
    name: string;
    abilities: Ability[];
    names: Name[];
    main_region: Region;
    moves: Move[];
    pokemon_species: PokemonSpecies[];
    types: Type[];
    version_groups: VersionGroup[];

    constructor() {

    }
}