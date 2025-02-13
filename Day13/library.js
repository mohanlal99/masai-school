const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book) {
      let {title,author,year} = book
      
      if (!title || !author || !year) {
        console.log("Book information is incomplete.");
        return;
      }
      this.books.push(book);
    },
    findBookAll(){
      return this.books
    }
    ,
    findBookByTitle(title) {
      return this.books.find((book) => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex((book) => book.title === title);
  
      if (index !== -1) {
        this.books.splice(index, 1);
      } else {
        console.log("Book not found.");
      }
    },
  };
  // let book = {title:"How to talk anyone",author:"mohanlal",year:2015}
  // library.addBook({ author: "George Orwell",author:'Prema nand', year: 1949 });
  // library.addBook(book)
  // console.log(library.books)
  // library.removeBook("The Hobbit")
  // console.log(library.books)
  
  let book_store = {title:'How to talk anyone',author:'mohanlal',year: 2025}
  let book_store2 = {title:'How to talk anyone2',author:'mohanlal2',year: 2025}
  let book_store3 = {title:'How to talk anyone3',author:'mohanlal2',year: 2025}
  library.addBook(book_store)
  library.addBook(book_store2)
  library.addBook(book_store3)
  console.log(library.findBookAll())
  
  