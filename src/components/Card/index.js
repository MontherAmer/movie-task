import React, { useState, useEffect } from 'react';

import { IMAGES_BASE_URL } from '../../config';

const Card = ({ data }) => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    let _color = 'red';
    if (data.vote_average > 5) _color = 'yellow';
    if (data.vote_average > 7) _color = 'green';
    setColor(_color);
  }, []);

  return (
    <div className="d-flex flex-column mb-3 position-relative">
      <div className={`card-rate ${color}`}>
        <p className="m-0">{data.vote_average}</p>
      </div>
      <img src={`${IMAGES_BASE_URL}${data.poster_path}`} alt="poster" />
      <p className="mt-2 mb-1">{data.original_title}</p>
      <p className="golden">{data.release_date}</p>
    </div>
  );
};

export default Card;
