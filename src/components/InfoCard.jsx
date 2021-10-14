import React, { useEffect, useState } from 'react';


export const InfoCard = ({isFetching, monster, name, common_locations, description, drops, image, children}) => {

  return (
      <div className="info-card-container">
        <div className="image-container info-flex">
          <img width="300" heigh="300" src={isFetching ? null : monster.image}></img>
        </div>
        {children}
        {/* <ul className="details-container info-flex">
          <li>Monster Name:{isFetching ? null : monster.name}</li>
          <li> Description:{isFetching ? null : monster.description}</li>
          <li>Common Locations:{isFetching ? null : monster.common_locations}</li>
          <li>Drops:{ isFetching ? null : monster.drops}</li>
        </ul> */}
    </div>
  )
}