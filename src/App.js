import React from 'react';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';

import './App.css';

import SearchPage from './pages/SearchPage';
import BooksListPage from './pages/BooksListPage';

// todo: remove this
window.BooksAPI = BooksAPI;

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BooksListPage}/>
        <Route path='/search' component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
