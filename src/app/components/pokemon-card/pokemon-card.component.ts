import { Component, OnInit, HostListener } from "@angular/core";
import $ from "jquery";

// Models
import { NamedAPIResourceList } from "../../models/utility/NamedAPIResourceList";
import { NamedAPIResource } from "../../models/utility/NamedAPIResource";
import { PokemonCard } from "../../models/own/PokemonCard";
import { Pokemon } from "../../models/pokemon/Pokemon";

// Services
import { PokemonCardService } from "src/app/services/pokemon-card.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"]
})
export class PokemonCardComponent implements OnInit {
  pokemons: NamedAPIResourceList;
  pokemonList: NamedAPIResource[];
  pokemon: Pokemon;
  pokemonCards: PokemonCard[];
  pokemonCard: PokemonCard;

  offset: number;
  limit: number;
  isLoading: boolean;

  constructor(private pokemonCardService: PokemonCardService) {
    this.pokemonCards = [];
    this.offset = 0;
    this.limit = 20;
    this.isLoading = false;
  }

  ngOnInit() {
    this.isLoading = true;
    this.getPokemon(this.offset, this.limit);
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isLoading = true;
      this.offset += 20;
      this.limit += 20;
      this.getPokemon(this.offset, this.limit);
    }
  }

  getPokemon(offset: Number, limit: Number): void {
    this.pokemonCardService
      .getPokemon(offset, limit)
      .subscribe(async (pokemon: NamedAPIResourceList) => {
        this.pokemons = pokemon;
        this.pokemonList = this.pokemons.results;
        for (const pokemon of this.pokemonList) {
          await this.getPokemonByName(pokemon.name);
        }
        this.isLoading = false;
      });
  }

  async getPokemonByName(name: String) {
    return this.pokemonCardService
      .getPokemonByName(name)
      .then((pokemon: Pokemon) => {
        this.pokemonCards.push(
          new PokemonCard(pokemon.name, pokemon.types.reverse())
        );
      });
  }
}
