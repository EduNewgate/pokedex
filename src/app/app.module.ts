import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { PokemonCardComponent } from "./components/pokemon-card/pokemon-card.component";

//PrimeNG Modules
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TooltipModule} from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule,
    TooltipModule,
    ChartModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
