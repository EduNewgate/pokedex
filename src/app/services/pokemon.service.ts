import { Injectable } from "@angular/core";
import { PokemonDetail } from "../models/own/PokemonDetail";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  pokemonDetail: PokemonDetail;

  constructor() {}

  public setPokemonDetail(pkmDetail: PokemonDetail) {
    this.pokemonDetail = pkmDetail;
  }

  public getPokemonDetail() {
    return this.pokemonDetail;
  }
}
