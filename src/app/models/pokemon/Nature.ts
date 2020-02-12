import { BerryFlavor } from "../berries/BerryFlavor";
import { Stat } from './Stat';
import { NatureStatChange } from './NatureStatChange';
import { MoveBattleStylePreference } from './MoveBattleStylePreference';
import { Name } from './../utility/Name';

export class Nature {

    id: number;
    name: string;
    decreased_stat: Stat;
    increased_stat: Stat;
    hates_flavor: BerryFlavor;
    likes_flavor: BerryFlavor;
    pokeathlon_stat_changes: NatureStatChange[];
    move_battle_style_preferences: MoveBattleStylePreference[];
    names: Name[];

    constructor() {

    }
}