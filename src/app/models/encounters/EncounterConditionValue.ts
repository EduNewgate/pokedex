import { EncounterCondition } from "./EncounterCondition";
import { Name } from './../utility/Name';

export class EncounterConditionValue {

    id: number;
    name: string;
    condition: EncounterCondition[];
    names: Name[];

    constructor() {

    }
}