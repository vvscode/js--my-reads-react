import React from 'react';
import * as BooksAPI from './utils/BooksAPI';
import {Route} from 'react-router-dom';

import './App.css';
import SearchPage from './pages/SearchPage';
import BooksListPage from './pages/BooksListPage';
import {update, getAll} from './utils/BooksAPI';

// todo: remove this
window.BooksAPI = BooksAPI;

class BooksApp extends React.Component {
  state = {
    books: []
  };

  constructor(...args) {
    super(...args);
    this.updateBookShelf = this.updateBookShelf.bind(this);
  }

  componentWillMount() {
    getAll().then((books) => this.setState({books}));
  }

  updateBookShelf(book, shelf) {
    update(book, shelf).then(() => this.setState({
      books: this
        .state
        .books
        .map(item => item.id === book.id
          ? ({
            ...book,
            shelf
          })
          : item)
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => <BooksListPage books={this.state.books} updateBookShelf={this.updateBookShelf} />}/>
        <Route path='/search' render={() => <SearchPage books={this.state.books} updateBookShelf={this.updateBookShelf} />}/>
      </div>
    )
  }
}

export default BooksApp
