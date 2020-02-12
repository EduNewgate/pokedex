import { Generation } from "../games/Generation";
import { Pokedex } from "../games/Pokedex";
import { Name } from './../utility/Name';
import { VersionGroup } from './../games/VersionGroup';

export class Region {

    id: number;
    locations: Location[];
    name: string;
    names: Name[];
    main_generation: Generation;
    pokedexes: Pokedex[];
    version_groups: VersionGroup[];

    constructor() {

    }
}