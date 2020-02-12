import { Name } from './../utility/Name';
import { PalParkEncounterSpecies } from './PalParkEncounterSpecies';

export class PalParkArea {

    id: number;
    name: string;
    names: Name[];
    pokemon_encounters: PalParkEncounterSpecies[];

    constructor() {

    }
}