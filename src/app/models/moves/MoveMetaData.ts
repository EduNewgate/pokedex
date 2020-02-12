import { Move } from "./Move";
import { MoveAilment } from './MoveAilment';

export class MoveMetaData {

    ailment: MoveAilment;
    category: Move;
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;

    constructor() {

    }
}