import { Description } from './../utility/Description';
import { GrowthRateExperienceLevel } from './GrowthRateExperienceLevel';
import { PokemonSpecies } from './PokemonSpecies';

export class GrowthRate {

    id: number;
    name: string;
    formula: string;
    descriptions: Description[];
    levels: GrowthRateExperienceLevel[];
    pokemon_species: PokemonSpecies[];

    constructor() {

    }
}