import {gql} from 'apollo-boost';

export const POKEMON_QUERY = gql`
  {
    pokemons(first: 151) {
      id
      name
      image
    }
  }
`;
