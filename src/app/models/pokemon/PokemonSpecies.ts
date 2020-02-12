import { GrowthRate } from "./GrowthRate";
import { EggGroup } from "./EggGroup";
import { PokemonColor } from "./PokemonColor";
import { PokemonShape } from "./PokemonShape";
import { PokemonHabitat } from "./PokemonHabitat";
import { Generation } from "../games/Generation";
import { EvolutionChain } from "../evolution/EvolutionChain";
import { Name } from "../utility/Name";
import { FlavorText } from "../utility/FlavorText";
import { Description } from "../utility/Description";
import { PokemonSpeciesDexEntry } from './PokemonSpeciesDexEntry';
import { PalParkEncounterArea } from './PalParkEncounterArea';
import { Genus } from './Genus';
import { PokemonSpeciesVariety } from './PokemonSpeciesVariety';

export class PokemonSpecies {

    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    hatch_counter: number;
    has_gender_diferences: boolean;
    forms_switchable: boolean;
    growth_rate: GrowthRate;
    pokedex_numbers: PokemonSpeciesDexEntry[];
    egg_groups: EggGroup[];
    color: PokemonColor;
    shape: PokemonShape;
    evolves_from_species: PokemonSpecies;
    evolution_chain: EvolutionChain;
    habitat: PokemonHabitat;
    generation: Generation;
    names: Name[];
    pal_park_encounters: PalParkEncounterArea[];
    flavor_text_entries: FlavorText[];
    form_descriptions: Description[];
    genera: Genus[];
    varieties: PokemonSpeciesVariety[];

    constructor() {

    }
}