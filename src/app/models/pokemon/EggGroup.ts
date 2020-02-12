import { Name } from './../utility/Name';
import { PokemonSpecies } from './PokemonSpecies';

export class EggGroup {

    id: number;
    name: string;
    names: Name[];
    pokemon_species: PokemonSpecies[];

    constructor() {

    }
}