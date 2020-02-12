import { Encounter } from "./Encounter";
import { Version } from "../games/Version";

export class VersionEncounterDetail {

    version: Version;
    max_chance: number;
    encounter_details: Encounter[];

    constructor() {

    }
}