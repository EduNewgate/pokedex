import { PokemonSpecies } from './../pokemon/PokemonSpecies';
import { EvolutionDetail } from './EvolutionDetail';

export class ChainLink {

    is_baby: boolean;
    species: PokemonSpecies;
    evolution_details: EvolutionDetail[];
    evolves_to: ChainLink[];

    constructor() {

    }
}