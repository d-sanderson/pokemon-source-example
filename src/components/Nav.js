import React, { useState, useEffect } from "react";

import { css } from "@emotion/core";


const Nav = () => {
  const [covidBannerIsOpen, setCovidBannerIsOpen] = useState(true);

  return (
    <div
      className={`py-2 px-4 lg:py-8 lg:px-32 w-full fixed z-10`}
      css={css`
        bottom: 0;
        background-color: #fd6550;
      `}
    >
      <div
        className="flex items-center justify-between w-48 py-2 px-4 absolute"
        css={css`
          top: 0;
          right: 10%;
          transform: translateY(-100%);
          background-color: #fd6550;
          border-radius: 12px 12px 0px 0px;
        `}
      >
          Hello
      </div>
      <p
        className="py-4 mx-4"
        css={css`
          color: rgba(0, 0, 0, 0.87);
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
        `}
      >
Content
      </p>
    </div>
  );
};

export default Nav;