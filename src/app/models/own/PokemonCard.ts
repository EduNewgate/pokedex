import { PokemonType } from '../pokemon/PokemonType';

export class PokemonCard {

    name: String;
    types: PokemonType[]

    constructor(name: String, types: PokemonType[]) {
        this.name = name;
        this.types = types;
    }
}