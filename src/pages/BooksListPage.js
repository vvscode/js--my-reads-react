import React from 'react';

import BookShelf from '../components/BookShelf';
import books from '../utils/Books_LIST.mock';
import separateByShelf from '../utils/separateByShelf';

const booksByShelf = separateByShelf(books);

console.log(booksByShelf);

const BooksListPage = ({toggleSearchState}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {Object
          .keys(booksByShelf)
          .map((key) => <BookShelf title={key} books={booksByShelf[key]} key={key}/>)}
      </div>
    </div>
    <div className="open-search">
      <a onClick={toggleSearchState}>Add a book</a>
    </div>
  </div>
);

export default BooksListPage;