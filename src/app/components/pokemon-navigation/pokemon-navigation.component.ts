import { Component, OnInit } from '@angular/core';
import { AdjacentPokemon } from 'src/app/models/own/AdjacentPokemon';

@Component({
  selector: 'app-pokemon-navigation',
  templateUrl: './pokemon-navigation.component.html',
  styleUrls: ['./pokemon-navigation.component.css']
})
export class PokemonNavigationComponent implements OnInit {

  previous: AdjacentPokemon;
  next: AdjacentPokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
