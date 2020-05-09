import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allPokemons {
        nodes {
          name
          hp
          sp_def
          sp_atk
          defense
          attack
          speed
          sprites {
            normal
            large
            animated
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

