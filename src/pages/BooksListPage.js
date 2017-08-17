import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import BookShelf from '../components/BookShelf';
import books from '../utils/Books_LIST.mock';
import separateByShelf from '../utils/separateByShelf';
import {update, getAll} from '../utils/BooksAPI';

class BooksListPage extends Component {
  state = {
    results: []
  };

  componentWillMount() {
    getAll().then((results) => this.setState({results}));
  }

  updateBookShelf(book, shelf) {
    update(book, shelf).then(() => this.setState({
      results: this
        .state
        .results
        .map(item => item === book
          ? ({
            ...book,
            shelf
          })
          : item)
    }))
  }

  render() {
    const books = this.state.results;
    const booksByShelf = separateByShelf(books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object
              .keys(booksByShelf)
              .map((key) => <BookShelf
                title={key}
                books={booksByShelf[key]}
                key={key}
                updateBookShelf={this
                .updateBookShelf
                .bind(this)}/>)}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
};

export default BooksListPage;