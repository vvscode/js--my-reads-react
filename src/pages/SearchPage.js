import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {search} from '../utils/BooksAPI';
import BookShelf from '../components/BookShelf';

class SearchPage extends Component {
  state = {
    results: []
  };

  onInputChange({ target: { value }}) {
    search(value)
      .then((results) => this.setState({results: Array.isArray(results) ? results : []}));
  }

  render() {
    const books = this.state.results;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
            <input type="text" placeholder="Search by title or author" onChange={this.onInputChange.bind(this)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          <BookShelf title={'Search results'} books={books}/>
        </div>
      </div>
    );
  }
};

export default SearchPage