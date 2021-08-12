import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IMAGES_BASE_URL } from '../../config';

const Card = ({ data }) => {
  const [color, setColor] = useState('red');
  const [path, setPath] = useState('');

  const history = useHistory();

  useEffect(() => {
    let _color = 'red';
    if (data.vote_average > 5) _color = 'yellow';
    if (data.vote_average > 7) _color = 'green';
    setColor(_color);
    setPath(`${IMAGES_BASE_URL}${data.poster_path}`);
  }, [data]);

  const handleImageError = (e) => setPath('https://via.placeholder.com/350?text=placeholder');

  const handleClick = () => history.push(`/movie/${data.id}`);

  return (
    <div className="d-flex flex-column mb-3 position-relative">
      <div className={`card-rate ${color}`}>
        <p className="m-0">{parseFloat(data.vote_average).toFixed(1)}</p>
      </div>
      <img onError={handleImageError} src={path} alt="poster" className="pointer" onClick={handleClick} />
      <p className="mt-2 mb-1">{data.original_title}</p>
      <p className="golden">{data.release_date}</p>
    </div>
  );
};

export default Card;
