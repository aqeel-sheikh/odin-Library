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
  const newBookNameElement = document.querySelector("#new-book-name");
  const newBookName = newBookNameElement.value;

  const newBookAuthorElement = document.querySelector("#new-book-author");
  const newBookAuthor = newBookAuthorElement.value;

  if (!newBookName || !newBookAuthor) {
    console.log("Missing either Name or Author or Both");
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
  delBtn.src = "delete.svg";

  newBook.append(bookName);
  newBook.append(bookAuthor);
  newBook.append(delBtn);

  bookName.textContent = newBookName;
  bookAuthor.textContent = newBookAuthor;

  bookShelf.append(newBook);

  delBtn.addEventListener("click", ()=>{
    newBook.remove()
    })

  newBookNameElement.value = null;
  newBookAuthorElement.value = null;
});


