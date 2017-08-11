import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import BookShelf from '../components/BookShelf';
import separateByShelf from '../utils/separateByShelf';

const BooksListPage = ({books, updateBookShelf}) => {
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
              updateBookShelf={updateBookShelf}/>)}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BooksListPage;