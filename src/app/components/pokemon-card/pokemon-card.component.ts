import { Component, OnInit, HostListener } from "@angular/core";

// Models
import { PokemonCard } from "../../models/own/PokemonCard";

// Services
import { Apollo } from "apollo-angular";
import PkmQueries from "../../queries/pokemon-card";
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetail } from 'src/app/models/own/PokemonDetail';

const PokemonCardsQuery = PkmQueries.PokemonCardsQuery;

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"]
})
export class PokemonCardComponent implements OnInit {
  pokemonCards: PokemonCard[];
  pokemonCard: PokemonCard;
  pokemonDetail: PokemonDetail;
  img: HTMLImageElement

  offset: number;
  limit: number;
  isLoading: boolean;
  dataChart: any;
  displayDialog: boolean;
  chartOptions: any;
  color: number[];

  constructor(private apollo: Apollo, private pokemonService: PokemonService) {
    this.pokemonCards = new Array();
    this.offset = 0;
    this.limit = 20;
    this.isLoading = false;
    this.displayDialog = false;
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
      .valueChanges.subscribe(({ data }: any) => {
        for (const ob of data.getPokemonCards) {
          this.pokemonCards.push(ob);
        }
        this.isLoading = false;
      });
  }

  showDialog(pokemonCard: PokemonCard) {
    this.setPkmData(pokemonCard);
    this.displayDialog = true;
  }

  setPkmData(pokemonCard: PokemonCard) {
    this.pokemonCard = pokemonCard;
    /*this.setColor(this.pokemonCard.name);
    this.buildChartData(pokemonCard.stats);*/
  }

  /*setColor(name: String) {
    this.img = <HTMLImageElement> document.getElementById("imgCard" + this.pokemonCard.name);
    this.color = Utils.getDominantColor(name, this.img);
  }

  buildChartData(stats: PokemonStat[]) {
    let labels = [];
    let labelsValues = [];
    for (const pkmStat of stats) {
      labels.push(Utils.formatName(pkmStat.stat.name));
      labelsValues.push(pkmStat.base_stat);
    }
    this.dataChart = {
      labels: labels,
      datasets: [
        {
          label: "Base stats of " + this.pokemonCard.name,
          backgroundColor:
            "rgba(" +
            this.color[0] +
            ", " +
            this.color[1] +
            ", " +
            this.color[2] +
            ",0.8)",
          borderColor:
            "rgba(" +
            this.color[0] +
            ", " +
            this.color[1] +
            ", " +
            this.color[2] +
            ",1)",
          data: labelsValues
        }
      ]
    };
    this.chartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              max: 255,
              min: 0,
              stepSize: 51
            }
          }
        ]
      }
    };
  }*/
}
