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
      <ul>
        <HeaderLink text="WHAT?" />
        <HeaderLink text="+ NEW GAME"/>
      </ul>
    </div>
    
  );
};