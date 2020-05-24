/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { getColorByType, LightenDarkenColor } from "../lib/common"
import Nav from "../components/Nav"
const Layout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      css={css`
        background-color:  ${pageContext?.length ? LightenDarkenColor(getColorByType(pageContext.type), -50) : "#8c7851"};
      `}
    >
      <Nav/>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
