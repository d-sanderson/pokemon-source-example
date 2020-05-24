import React from "react";
import { graphql } from "gatsby";
import { getColorByType } from "../lib/common.js"
import PokemonCardGrid from "../components/PokemonCardGrid";
const TypeTemplate = ({ data, pageContext }) => {
  const pokemons = data.allPokemons.nodes;
  let color = getColorByType(pageContext.type)
  return <PokemonCardGrid color={color} pokemons={pokemons}/>;
};

export default TypeTemplate;

export const typeQuery = graphql`
  query QueryAllPokemons($type: String!) {
    allPokemons(filter: { type: { eq: $type } }) {
      nodes {
        name
        national_number
        hp
        sp_def
        sp_atk
        defense
        attack
        type
        speed
        sprites {
          normal
        }
      }
    }
  }
`;

