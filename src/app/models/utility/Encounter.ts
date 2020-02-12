import { EncounterConditionValue } from './../encounters/EncounterConditionValue';
import { EncounterMethod } from './../encounters/EncounterMethod';

export class Encounter {

    min_level: number;
    max_level: number;
    condition_values: EncounterConditionValue[];
    chance: number;
    method: EncounterMethod;

    constructor() {

    }
}