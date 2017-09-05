import React from 'react';

const BookCard = ({
  book: {
    title,
    subtitle,
    authors,
    publisher,
    publishedDate,
    description,
    industryIdentifiers,
    readingModes,
    pageCount,
    printType,
    categories,
    averageRating,
    ratingsCount,
    maturityRating,
    allowAnonLogging,
    contentVersion,
    panelizationSummary,
    imageLinks,
    language,
    previewLink,
    infoLink,
    canonicalVolumeLink,
    id,
    shelf
  }
}) => (
  <div className="book" title={description}>
    <div className="book-top">
      <div
        className="book-cover"
        style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${imageLinks.smallThumbnail}")`
      }}></div>
      <div className="book-shelf-changer">
        <select value={shelf} onChange={() => {}}>
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

export default BookCard;