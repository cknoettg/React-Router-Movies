import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movie from './Movies/Movie';
import MoviesList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <div>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={Movie} />
        </div>
      </div>
    </Router>
  );
};

export default App;
