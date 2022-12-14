import React from 'react';
import {BsFillPatchCheckFill} from "react-icons/bs";

const Skill = ({Name, Proficiency}) => {
  return (
    <article className={'experience__details'}>
      <BsFillPatchCheckFill className={'experience__details-icon'}/>
      <div>
        <h4>{Name}</h4>
        <small className={'text-light'}>{Proficiency}</small>
      </div>
    </article>
  );
};

export default Skill;