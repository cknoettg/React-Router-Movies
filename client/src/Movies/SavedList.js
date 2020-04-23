import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
    ))}
    <div className="home-button">Home</div>
    <Link to="/" className="homebutton">Home</Link>
  </div>
);

export default SavedList;
