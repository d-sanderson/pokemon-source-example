import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import types from "../lib/types";
import tw from "twin.macro";
import { getColorByType, LightenDarkenColor } from "../lib/common.js";
const NavContainer = styled.nav`
  ${tw`py-2 px-4 fixed z-10 h-full`}
  bottom: 0;
  right: 0;
  overflow-y: scroll;
`;

const TypeOption = styled.span`
  ${tw`flex justify-between rounded-full px-3 py-1 my-2 hover:bg-gray-300 text-sm font-semibold text-gray-700 mr-2`};
  width: 100%;
  background-color: ${props => (props.color ? props.color : "#fff")};
  `;
const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const typeOptions = types.map(type => (
    <Link to={`/type/${type.toLowerCase()}`}>
      <TypeOption color={getColorByType(type)}>{type}</TypeOption>
    </Link>
  ));
  return (
    <NavContainer>
      <section>
        <div>GENERATION:</div>
        <Link to="/gen/1"><TypeOption>I</TypeOption></Link>
        <Link to="/gen/2"><TypeOption>II</TypeOption></Link>
        <Link to="/gen/3"><TypeOption>III</TypeOption></Link>
        <Link to="/gen/4"><TypeOption>IV</TypeOption></Link>
        <Link to="/gen/5"><TypeOption>V</TypeOption></Link>
        <Link to="/gen/6"><TypeOption>VI</TypeOption></Link>
        <Link to="/gen/7"><TypeOption>VI</TypeOption></Link>
      </section>
      <section>
        <div>TYPE:</div>
        {typeOptions}
      </section>
    </NavContainer>
  );
};

export default Nav;
