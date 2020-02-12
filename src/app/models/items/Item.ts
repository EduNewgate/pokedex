import { EvolutionChain } from './../evolution/EvolutionChain';
import { ItemFlingEffect } from './ItemFlingEffect';
import { ItemAttribute } from './ItemAttribute';
import { ItemCategory } from './ItemCategory';
import { VerboseEffect } from './../utility/VerboseEffect';
import { VersionGroupFlavorText } from './../utility/VersionGroupFlavorText';
import { GenerationGameIndex } from './../utility/GenerationGameIndex';
import { Name } from './../utility/Name';
import { ItemSprites } from './ItemSprites';
import { ItemHolderPokemon } from './ItemHolderPokemon';
import { MachineVersionDetail } from './../utility/MachineVersionDetail';

export class Item {

    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: ItemFlingEffect;
    attributes: ItemAttribute[];
    category: ItemCategory;
    effect_entries: VerboseEffect[];
    flavor_text_entries: VersionGroupFlavorText[];
    game_indices: GenerationGameIndex[];
    names: Name[];
    sprites: ItemSprites;
    held_by_pokemon: ItemHolderPokemon[];
    baby_trigger_for: EvolutionChain;
    machines: MachineVersionDetail[];

    constructor() {

    }
}