import React from 'react';

export default function HeaderLink(props){

  return (
    <li>
      <a href="#">
      {props.text}
      </a>
    </li>
    
  );
}