import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {search} from '../utils/BooksAPI';
import findBy from '../utils/findBy';
import BookShelf from '../components/BookShelf';

class SearchPage extends Component {
  state = {
    results: []
  };

  onInputChange(ev) {
    search(ev.currentTarget.value)
      .then((results) => {
        this.setupSearchResults(this.props.books, results)
      });
  }

  componentWillReceiveProps({books}) {
    if(books !== this.props.books) {
      this.setupSearchResults(books, this.state.results);
    }
  }

  setupSearchResults(collectionBooks, results) {
    this.setState({
      results: Array.isArray(results)
        ? results.map((item) => {
          const bookFromCollection = findBy(collectionBooks, 'id', item.id);
          return bookFromCollection
            ? {
              ...item,
              shelf: bookFromCollection.shelf
            }
            : item
        })
        : []
    });
  }

  render() {
    const books = this.state.results;
    const onInputChange = this
      .onInputChange
      .bind(this);

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
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={onInputChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          <BookShelf
            title={'Search results'}
            books={books}
            updateBookShelf={this.props.updateBookShelf}/>
        </div>
      </div>
    );
  }
};

export default SearchPage;