import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import PokemonCard from "./PokemonCard";
import { css } from "@emotion/core";
import { getColorByType } from "../lib/common.js";

const Container = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
margin: 0 10%;
grid-auto-rows: auto;
grid-gap: 1rem;
}
`;

const PokemonCardGrid = ({ pokemons }) => {
  const monz = pokemons.map((pokemon, i) => <PokemonCard pokemon={pokemon}/>);
  return <Container>{monz}</Container>;
};

export default PokemonCardGrid;
