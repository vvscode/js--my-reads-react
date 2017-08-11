import React, {Component} from 'react';

import './BookCard.css';

class BookCard extends Component {
  onChangeSelf(book, shelf) {
    this.props.updateBookShelf(book, shelf);
  }

  render() {
    const {
      book,
      book: {
        title,
        // subtitle,
        authors = [],
        // publisher,
        // publishedDate,
        description,
        // industryIdentifiers,
        // readingModes,
        // pageCount,
        // printType,
        // categories,
        // averageRating,
        // ratingsCount,
        // maturityRating,
        // allowAnonLogging,
        // contentVersion,
        // panelizationSummary,
        imageLinks = {},
        // language,
        // previewLink,
        // infoLink,
        // canonicalVolumeLink,
        // id,
        shelf
      }
    } = this.props;

    return (
      <div className="book" title={description}>
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url("${imageLinks.smallThumbnail}")`}}></div>
          <div className="book-shelf-changer">
            <select
              value={shelf || 'none'}
              onChange={({target: {
                value
              }}) => this.onChangeSelf(book, value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}

export default BookCard;