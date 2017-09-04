import React from 'react';
// import * as BooksAPI from './utils/BooksAPI'
import './App.css';

import SearchPage from './components/pages/SearchPage';
import BooksListPage from './components/pages/BooksListPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  toggleSearchState() {
    this.setState({
      showSearchPage: !this.state.showSearchPage
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage
          ? (<SearchPage toggleSearchState={this.toggleSearchState.bind(this)} />)
          : (<BooksListPage  toggleSearchState={this.toggleSearchState.bind(this)}/>)}
      </div>
    )
  }
}

export default BooksApp
