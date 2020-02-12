import { PokemonSpeciesGender } from './PokemonSpeciesGender';
import { PokemonSpecies } from './PokemonSpecies';

export class Gender {

    id: number;
    name: string;
    pokemon_species_details: PokemonSpeciesGender[];
    required_for_evolution: PokemonSpecies[];

    constructor() {

    }
}