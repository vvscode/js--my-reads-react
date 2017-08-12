import React from 'react';

import BookCard from './BookCard';
import humanize from '../utils/humanize';

const BookShelf = ({
  title,
  books,
  updateBookShelf = () => null
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{humanize(title)}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => <li key={book.id}><BookCard book={book} updateBookShelf={updateBookShelf}/></li>)}
      </ol>
    </div>
  </div>
);

export default BookShelf;