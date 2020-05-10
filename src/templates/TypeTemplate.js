import React from "react";
import { graphql } from "gatsby";
import { getColorByType } from "../lib/common.js"
const TypeTemplate = ({ data, pageContext }) => {
  let color = getColorByType(pageContext.type)
  console.log(color)
  return <pre style={{backgroundColor: color}}>{JSON.stringify(data, null, 4)}</pre>;
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
          large
          animated
        }
      }
    }
  }
`;
