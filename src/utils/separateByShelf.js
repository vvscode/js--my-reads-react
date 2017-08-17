export default (books = []) => books.reduce((hash, book) => {
  hash[book.shelf] = hash[book.shelf] || [];
  hash[book.shelf].push(book);
  return hash;
}, {});