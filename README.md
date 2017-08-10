### Intro

This project was created for Udacity's React Fundamentals course (part of [React Nanodegree Program](https://www.udacity.com/course/react-nanodegree--nd019)), developed by [React Training](https://reacttraining.com). 

### How to setup

```
# clone repo
git clone https://github.com/vvscode/js--my-reads-react.git

# go to directory
cd js--my-reads-react

# install dependencies
npm install

# run app
npm start
```

### App structure

```
.
├── README.md	<-- this file
├── package-lock.json
├── package.json	<-- npm dependencies 
├── public	<-- static files for the app
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src	<-- directory with source files
│   ├── App.css                        
│   ├── App.js	<-- main App Component
│   ├── App.test.js
│   ├── components	<-- directory for components
│   │   ├── BookCard.js	<-- single book presenter-component
│   │   └── BookShelf.js	<-- presenter for list of components
│   ├── icons
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── index.css
│   ├── index.js	<-- Initial file, root for the application
│   ├── logo.svg
│   ├── pages	<-- components for separate pages
│   │   ├── BooksListPage.js	<-- Component to present list of all books
│   │   └── SearchPage.js	<-- Component to present search page
│   ├── registerServiceWorker.js
│   └── utils	<-- utils and api-adapter
│       ├── BooksAPI.js
│       └── separateByShelf.js
└── yarn.lock
```

### App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

Currently Reading
Want to Read
Read

![enter image description here](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f12_react-project1-a/react-project1-a.png)

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

![enter image description here](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f26_react-project1-b/react-project1-b.png)

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

![enter image description here](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f40_react-project1-c/react-project1-c.png)

When a book is on a bookshelf, it should have the same state on both the main application page and the search page

![enter image description here](https://d17h27t6h515a5.cloudfront.net/topher/2017/July/595d48a9_correct-use-of-state/correct-use-of-state.gif)

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 
