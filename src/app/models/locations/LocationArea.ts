import { Location } from "./Location";
import { EncounterMethodRate } from './EncounterMethodRate';
import { Name } from './../utility/Name';
import { PokemonEncounter } from './PokemonEncounter';

export class LocationArea {

    id: number;
    name: string;
    game_index: number;
    encounter_method_rate: EncounterMethodRate[];
    location: Location;
    names: Name[];
    pokemon_encounters: PokemonEncounter[];

    constructor() {

    }
}