import { Characteristic } from "./Characteristic";
import { MoveDamageClass } from "../moves/MoveDamageClass";
import { Name } from "../utility/Name";
import { MoveStatAffectSets } from './MoveStatAffectSets';
import { NatureStatAffectSets } from './NatureStatAffectSets';

export class Stat {

    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: MoveStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: Characteristic;
    move_damage_class: MoveDamageClass;
    names: Name[];

    constructor() {

    }
}