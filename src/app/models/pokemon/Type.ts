import { Generation } from "../games/Generation";
import { Move } from "../moves/Move";
import { GenerationGameIndex } from "../utility/GenerationGameIndex";
import { MoveDamageClass } from "../moves/MoveDamageClass";
import { Name } from "../utility/Name";
import { TypeRelations } from './TypeRelations';
import { TypePokemon } from './TypePokemon';

export class Type {

    id: number;
    name: string;
    damage_relations: TypeRelations;
    game_indices: GenerationGameIndex[];
    generation: Generation;
    move_damage_class: MoveDamageClass;
    names: Name[];
    pokemon: TypePokemon[];
    moves: Move[];

    constructor() {

    }
}