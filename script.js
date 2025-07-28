// All of your book objects are going to be stored in an array,
// so you’ll need a constructor for books.
// Then, add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array.
// Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID(). This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged.

let myLibrary = [];

function Book(bookName, bookAuthor, bookID) {
  this.name = bookName
  this.author = bookAuthor
  this.ID = bookID
}

function addBookToLibrary(bookName, bookAuthor) {
    const uuid = crypto.randomUUID();
    let newBook = new Book(bookName, bookAuthor, uuid)
    myLibrary.push(newBook)
}
addBookToLibrary("book1","AKeel")
addBookToLibrary("book2","leeka")

// const div = document.querySelector(".library")
// myLibrary.forEach(book => {
//     const p = document.createElement("p")
//     p.textContent = "Book:" + book.name + " " + book.author
//     div.appendChild(p)
// })
