import React from "react";
import { graphql } from "gatsby";

const TypeTemplate = ({ data, pageContext }) => {
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default TypeTemplate;

export const typeQuery = graphql`
  query QueryAllPokemons($type: String!) {
    allPokemons(filter: { type: { eq: $type } }) {
      nodes {
        name
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
