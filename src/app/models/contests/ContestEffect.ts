import { Effect } from './../utility/Effect';
import { FlavorText } from './../utility/FlavorText';

export class ContestEffect {

    id: number;
    appeal: number;
    jam: number;
    effect_entries: Effect[];
    flavor_text_entries: FlavorText[];

    constructor() {

    }
}