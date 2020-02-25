import gql from "graphql-tag";

export default class PkmQueries {
  public static PokemonCardsQuery = gql`
    query GetPokemonCards($offset: Int, $limit: Int) {
      getPokemonCards(offset: $offset, limit: $limit) {
        name
        types {
          type {
            name
          }
        }
        entry_number
      }
    }
  `;
}
