// All of your book objects are going to be stored in an array,
// so you’ll need a constructor for books.
// Then, add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array.
// Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID(). This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged.

let myLibrary = [];

function Book(bookName, bookAuthor, bookID) {
  this.name = bookName;
  this.author = bookAuthor;
  this.ID = bookID;
}

function addBookToLibrary(bookName, bookAuthor) {
  const uuid = crypto.randomUUID();
  let newBook = new Book(bookName, bookAuthor, uuid);
  myLibrary.push(newBook);
}

const addBtn = document.querySelector("#add-btn");
const bookShelf = document.querySelector(".book-shelf");

addBtn.addEventListener("click", () => {
  const newBookName = document.querySelector("#new-book-name").value;
  const newBookAuthor = document.querySelector("#new-book-author").value;

  if (!newBookName || !newBookAuthor) {
    console.log("Cant log this book");
    return;
  }
  addBookToLibrary(newBookName, newBookAuthor);

  const newBook = document.createElement("div");
  newBook.classList.add("book");

  const bookName = document.createElement("div");
  bookName.classList.add("book-info");

  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book-info");

  const delBtn = document.createElement("img");
  delBtn.classList.add("del-btn");
  delBtn.src = "/delete.svg";

  newBook.append(bookName);
  newBook.append(bookAuthor);
  newBook.append(delBtn);

  bookName.textContent = newBookName;
  bookAuthor.textContent = newBookAuthor;

  bookShelf.append(newBook);
});

// const div = document.querySelector(".library")
// myLibrary.forEach(book => {
//     const p = document.createElement("p")
//     p.textContent = "Book:" + book.name + " " + book.author
//     div.appendChild(p)
// })
