import { Generation } from "./Generation";
import { Pokedex } from "./Pokedex";
import { Version } from "./Version";
import { MoveLearnMethod } from './../moves/MoveLearnMethod';
import { Region } from './../locations/Region';

export class VersionGroup {

    id: number;
    name: string;
    order: number;
    generation: Generation;
    move_learn_methods: MoveLearnMethod[];
    pokedexes: Pokedex[];
    regions: Region[];
    versions: Version[];

    constructor() {

    }
}