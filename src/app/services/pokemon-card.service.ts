import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokemonCardService {
  constructor(private http: HttpClient) {}

  public getPokemon(offset: Number, limit: Number) {
    let query = this.buildQuery(offset, limit);
    let url = "api/v2/pokemon/" + query;
    return this.http.get(url);
  }

  public getPokemonByName(name: String) {
    let url = "api/v2/pokemon/" + name;
    return this.http.get(url).toPromise();
  }

  public buildQuery(offset: Number, limit: Number) {
    return "?offset=" + offset + "&limit=" + limit;
  }
}
