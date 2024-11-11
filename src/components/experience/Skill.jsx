import React from 'react';
import {BsFillPatchCheckFill} from "react-icons/bs";

const Skill = ({children}) => {
  return (
    <li>
      <span style={{ display: 'inline-block', marginRight: '10px' }}>
        <BsFillPatchCheckFill />
      </span>
      {children}
    </li>
  );
};

export default Skill;