//what?
//nav
//li
//new game
//h1 hot or cold text

import React from "react";
import HeaderLink from "./HeaderLink"

export default function Header(props) {
  
  return (
    <div className="header">
      {props.text}
      <HeaderLink text="WHAT?" />
    </div>
    
  );
};