import React from 'react'
import { graphql } from "gatsby"
import PokemonCardGrid from "../components/PokemonCardGrid";
const GenerationTemplate = ({data}) => {
  console.log(data)
  const pokemons = data.allPokemons.nodes;
  console.log(data.allPokemons)
    return (
      <PokemonCardGrid pokemons={pokemons}/>
    )
}

export default GenerationTemplate

export const genQuery = graphql`
query QueryPokemonByGeneration($lte: Int!, $gte: Int!) {
    allPokemons(filter: {natl_num: {lte: $lte, gte: $gte}}, sort: {order: ASC, fields: natl_num}) {
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
`