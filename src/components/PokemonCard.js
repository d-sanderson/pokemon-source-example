import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { getColorByType, LightenDarkenColor } from "../lib/common.js";

const PokemonCard = ({ pokemon }) => {
  const {
    name,
    national_number,
    hp,
    attack,
    defense,
    sp_atk,
    sp_def,
    type,
    sprites,
  } = pokemon;

  const { normal, large, animate } = sprites;
  const color = getColorByType(type[0]);
  const Card = styled.div`
    ${tw`max-w-xs rounded overflow-hidden shadow-lg my-2`};
    background-color: #ffcb05;
    border: 10px solid #ffcb05;
    border-radius: 10px;
  `;

  const TopCard = styled.div`
    ${tw`flex justify-between`};
  `;
  const Title = styled.h2`
    ${tw`font-bold text-xl mb-2`};
  `;
  const CardBody = styled.div`
    ${tw`px-6 py-4`};
    border-radius: 10px;
    background-color: ${props => props.color};
  `;
  const Stat = styled.div`
    ${tw`flex justify-between shadow-lg rounded-full px-3 py-1 my-2 text-sm font-semibold text-gray-700 mr-2`};
    width: 100%;
    background-color: ${props => props.color};
  `;
  const Type = styled.span`
    ${tw`inline-block bg-gray-300 rounded-full px-3 py-1 my-4 text-sm font-semibold text-gray-700 mr-2`};
    &:hover {
      background-color: ${props => props.color};
    }
  `;
  const BottomCard = styled.div`
    height: 200px;
    padding: 10px 0 10px 2px;
  `;
  const types = type.map((t, i) => (
    <Type key={i} color={LightenDarkenColor(getColorByType(t), 40)}>
      {t}
    </Type>
  ));
  const lighterColor = LightenDarkenColor(getColorByType(type[0]), 30);
  return (
    <Card>
      <CardBody color={color}>
        <TopCard>
          <Title>{name}</Title> <span>HP: {hp}</span>
        </TopCard>
        <img
          onError={e => {
            e.target.src = "https://wiki.p-insurgence.com/images/0/09/722.png";
          }}
          css={css`
            ${tw`bg-indigo-300 m-auto text-white p-2 rounded`};
            background-color: ${lighterColor};
            width: 100%;
          `}
          src={normal}
          alt={name}
        />
        {types}
        <BottomCard color={lighterColor}>
          <Stat color={lighterColor}>
            <span>ATK:</span>
            <span>{attack}</span>
          </Stat>
          <Stat color={lighterColor}>
            <span>DEF:</span>
            <span>{defense}</span>
          </Stat>
          <Stat color={lighterColor}>
            <span>SP ATK:</span>
            <span>{sp_atk}</span>
          </Stat>
          <Stat color={lighterColor}>
            <span>SP DEF:</span>
            <span>{sp_def}</span>
          </Stat>
        </BottomCard>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
