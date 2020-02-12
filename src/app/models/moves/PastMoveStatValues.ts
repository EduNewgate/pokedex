import { VerboseEffect } from './../utility/VerboseEffect';
import { Type } from './../pokemon/Type';
import { VersionGroup } from './../games/VersionGroup';

export class PastMoveStatValues {

    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: VerboseEffect[];
    type: Type;
    version_group: VersionGroup;

    constructor() {

    }
}