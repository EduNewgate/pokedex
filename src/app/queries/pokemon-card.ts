import gql from "graphql-tag";

export default class PkmQueries {
  public static PokemonCardsQuery = gql`
    query GetPokemonCards($offset: Int, $limit: Int) {
      getPokemonCards(offset: $offset, limit: $limit) {
        entry_number
        pokemon_species {
          name
          varieties {
            is_default
            pokemon {
              name
              types {
                type {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;
}
