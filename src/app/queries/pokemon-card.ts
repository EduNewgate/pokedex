import gql from "graphql-tag";

export default class PkmQueries {
  public static PokemonCardsQuery = gql`
    query GetPokemonCards($offset: Int, $limit: Int) {
      getPokemonCards(offset: $offset, limit: $limit) {
        name
        height
        weight
        types {
          type {
            name
          }
        }
        abilities {
          is_hidden
          ability {
            name
          }
        }
        stats {
          base_stat
          stat {
            name
          }
        }
      }
    }
  `;
}
