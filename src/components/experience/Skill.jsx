import React from 'react';
import {HiChevronDoubleRight} from "react-icons/hi";

const Skill = ({children}) => {
  return (
    <li>
      <span style={{ display: 'inline-block', marginRight: '10px' }}>
        <HiChevronDoubleRight />
      </span>
      {children}
    </li>
  );
};

export default Skill;