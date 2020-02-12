import { Name } from "../utility/Name";
import { PokemonSpecies } from "./PokemonSpecies";
import { AwesomeName } from './AwesomeName';

export class PokemonShape {

    id: number;
    name: string;
    awesome_names: AwesomeName[];
    names: Name[];
    pokemon_species: PokemonSpecies[];

    constructor() {

    }
}