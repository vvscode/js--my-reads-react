import React from 'react';

import BookCard from './BookCard';

const BookShelf = ({title, books}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => <li key={book.id}><BookCard book={book}/></li>)}
      </ol>
    </div>
  </div>
);

export default BookShelf;