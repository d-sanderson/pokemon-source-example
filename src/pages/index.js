import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PokemonCardGrid from "../components/PokemonCardGrid";
export default () => {

  const data = useStaticQuery(graphql`
    {
      allPokemons {
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
  `);
  const pokemons = data.allPokemons.nodes;
  console.log(pokemons.length)
  return (
      <PokemonCardGrid pokemons={pokemons}/>
  );
};
