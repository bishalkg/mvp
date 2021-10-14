import React, { useEffect, useState } from 'react';


export const InfoCard = ({monster, name, common_locations, description, drops, image}) => {

  console.log(monster, 'monster');

  return (
    <div className="info-card-container">
      <div className="image-container">
        <img width="300" heigh="300" src={monster.image}></img>
      </div>
      <div className="details-conatiner">
        Monster Name:{monster.name}
        Description:{monster.description}
        Common Locations:{monster.common_locations}
        Drops:{monster.drops}
      </div>
    </div>

  )
}