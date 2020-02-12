import { Name } from './../utility/Name';
import { EncounterConditionValue } from './EncounterConditionValue';

export class EncounterCondition {

    id: number;
    name: string;
    names: Name[];
    values: EncounterConditionValue[];

    constructor() {

    }
}