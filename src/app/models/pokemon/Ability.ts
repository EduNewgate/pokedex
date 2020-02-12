import { Generation } from "../games/Generation";
import { Name } from "../utility/Name";
import { VerboseEffect } from "../utility/VerboseEffect";
import { AbilityEffectChange } from './AbilityEffectChange';
import { AbilityFlavorText } from './AbilityFlavorText';
import { AbilityPokemon } from './AbilityPokemon';

export class Ability {

    id: number;
    name: string;
    is_main_series: boolean;
    generation: Generation;
    names: Name[];
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[];
    pokemon: AbilityPokemon[];

    constructor() {

    }
}