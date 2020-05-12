import React from 'react'

const GenerationTemplate = ({data}) => {
    return (
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
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
          large
          animated
        }
      }
    }
  }
`;