function digitalLibSystem(){
    let Books = ['The Honesty','How to talk','By George Orwell','To Kill a Mockingbird','The Great Gatsby','One Hundred Years of Solitude','A Passage to India','Invisible Man','Beloved']
    return {
      addBooks: function(book){
        if(!book) return 'Book name is required'
        return Books.push(book)
      },
      removeBooks: function(book){
        Books = Books.filter(item=>item!=book)
        return Books
      },
      searchBooks: function(book){
        let res = Books.includes(book)
        return res?"Book is avilable":"The Book do not avilable"
      },
      FindFLO: function(book){
        let frist_index = Books.indexOf(book)
        let last_index = Books.lastIndexOf(book)
        return {frist_index,last_index}
      },
      extractSublist : function(){
        let newBookStore = Books.slice()
        return newBookStore
      },
      sortBooks:  function(){
       return Books.sort((a,b)=>{
          return a.localeCompare(b)
        })
        
      },
      replaceBookSp:  function(book,replaceBook){
        let frist_index = Books.indexOf(book)
        let last_index = Books.lastIndexOf(book)
        
        let res = Books.splice(frist_index,1,replaceBook)
        return {Books,res}
      },
      joinBooksTitle:  function(){
        
        return Books.join(',')
      },
    }
  }
  
  
  let books = digitalLibSystem()
  console.log("Added New Books Index on : ",books.addBooks("Everything is money"))
  console.log("Removed Books bt name filterd Books are : ",books.removeBooks("The Honesty"))
  console.log("searchBooks by the name : ",books.searchBooks("How to talk"))
  console.log("Books frist and last index : ",books.FindFLO("Everything is money"))
  console.log("extractSublist : ",books.extractSublist())
  console.log("sorted books list : ",books.sortBooks())
  console.log("Books is replace by old book",books.replaceBookSp("The Honesty",'Everything is not Money'))
  console.log("Books join with seprated commas",books.joinBooksTitle())
  