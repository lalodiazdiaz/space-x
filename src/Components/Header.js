import React from "react";
import { VscRocket } from "react-icons/vsc";

function Header({ title }) {
  return (
    <div className="header">
      <h1>
        {title} <VscRocket />
      </h1>
    </div>
  );
}

export default Header;
