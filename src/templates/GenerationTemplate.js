import React from 'react'
import { graphql } from "gatsby"
import PokemonCardGrid from "../components/PokemonCardGrid";
const GenerationTemplate = ({data}) => {
  const pokemons = data.allPokemons.nodes;
    return (
        <PokemonCardGrid pokemons={pokemons}/>
    )
}

export default GenerationTemplate

export const genQuery = graphql`
  query QueryPokemonGeneration($limit: Int!, $skip: Int!) {
    allPokemons(limit: $limit, skip: $skip) {
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