import { NamedAPIResource } from './NamedAPIResource';

export class NamedAPIResourceList {

    count: Number;
    next: String;
    previous: String;
    results: NamedAPIResource[];

    constructor() {

    }
}