import { ContestType } from "../contests/ContestType";
import { ContestEffect } from "../contests/ContestEffect";
import { Generation } from "../games/Generation";
import { ContestComboSets } from './ContestComboSets';
import { MoveDamageClass } from './MoveDamageClass';
import { VerboseEffect } from './../utility/VerboseEffect';
import { MoveFlavorText } from './MoveFlavorText';
import { MachineVersionDetail } from './../utility/MachineVersionDetail';
import { MoveMetaData } from './MoveMetaData';
import { Name } from './../utility/Name';
import { PastMoveStatValues } from './PastMoveStatValues';
import { MoveStatChange } from './MoveStatChange';
import { SuperContestEffect } from './../contests/SuperContestEffect';
import { MoveTarget } from './MoveTarget';
import  { Type } from './../pokemon/Type'

export class Move {

    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    prioity: number;
    power: number;
    contest_combos: ContestComboSets;
    contest_type: ContestType;
    contest_effect: ContestEffect;
    damage_class: MoveDamageClass;
    effect_entries: VerboseEffect[];
    flavor_text_entries: MoveFlavorText[];
    generation: Generation;
    machines: MachineVersionDetail[];
    meta: MoveMetaData;
    names: Name[];
    past_values: PastMoveStatValues[];
    stat_changes: MoveStatChange[];
    super_contest_effect: SuperContestEffect;
    target: MoveTarget;
    type: Type;

    constructor() {

    }
}