import { Component, OnInit, HostListener } from "@angular/core";

// Models
import { PokemonCard } from "../../models/own/PokemonCard";

// Services
import { Apollo } from "apollo-angular";
import PkmQueries from '../../queries/pokemon-card';

const PokemonCardsQuery = PkmQueries.PokemonCardsQuery;

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"]
})
export class PokemonCardComponent implements OnInit {
  pokemonCards: PokemonCard[];

  offset: number;
  limit: number;
  isLoading: boolean;

  constructor(private apollo: Apollo) {
    this.pokemonCards = new Array();
    this.offset = 0;
    this.limit = 20;
    this.isLoading = false;
  }

  ngOnInit() {
    this.isLoading = true;
    this.getPokemonCards(this.offset, this.limit);
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.offset += 20;
      this.getPokemonCards(this.offset, this.limit);
    }
  }

  getPokemonCards(offset: Number, limit: Number): void {
    this.isLoading = true;
    this.apollo
      .watchQuery({
        query: PokemonCardsQuery,
        variables: {
          offset: offset,
          limit: limit
        }
      })
      .valueChanges.subscribe(({ data }) => {
        for (const ob of data.getPokemonCards) {
          this.pokemonCards.push(ob);
        }
        this.isLoading = false;
      });
  }
}
