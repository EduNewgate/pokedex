import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetail } from 'src/app/models/own/PokemonDetail';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonDetail: PokemonDetail;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonDetail = this.pokemonService.getPokemonDetail();
  }

}
