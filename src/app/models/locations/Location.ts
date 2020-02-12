import { Region } from './Region';
import { Name } from './../utility/Name';
import { GenerationGameIndex } from './../utility/GenerationGameIndex';
import { LocationArea } from './LocationArea';

export class Location {

    id: number;
    name: string;
    region: Region;
    names: Name[];
    game_indices: GenerationGameIndex[];
    areas: LocationArea[];

    constructor() {

    }
}