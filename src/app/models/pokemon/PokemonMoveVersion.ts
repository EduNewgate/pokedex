import { MoveLearnMethod } from "../moves/MoveLearnMethod";
import { VersionGroup } from "../games/VersionGroup";

export class PokemonMoveVersion {

    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
    level_learned_at: number;
    
    constructor() {

    }
}