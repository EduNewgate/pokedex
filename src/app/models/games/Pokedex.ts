import { Description } from './../utility/Description';
import { Name } from './../utility/Name';
import { PokemonEntry } from './PokemonEntry';
import { Region } from './../locations/Region';
import { VersionGroup } from './VersionGroup';

export class Pokedex {

    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Description[];
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: Region;
    version_groups: VersionGroup[];

    constructor() {

    }
}