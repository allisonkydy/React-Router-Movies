import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  return (
    <div className="movie-card">
      <img src={require(`../assets/${id}.jpg`)} alt={`${title}`}/>
      <div>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      
    </div>
  )
};

export default MovieCard;

// ../assets/${id}.jpg