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
  bookAuthor.classList.add("author");

  const status = document.createElement("p");
  status.classList.add("status");
  status.textContent = "Status";

  const delBtn = document.createElement("img");
  delBtn.classList.add("del-btn");
  delBtn.src = "delete.svg";

  newBook.append(status);
  newBook.append(bookName);
  newBook.append(bookAuthor);
  newBook.append(delBtn);

  bookName.textContent = newBookName;
  bookAuthor.textContent = newBookAuthor;

  bookShelf.append(newBook);

  delBtn.addEventListener("click", () => {
    newBook.remove();
  });

  const statuses = [
    "Not Started",
    "Reading",
    "Completed",
    "On Hold",
    "Dropped",
  ];
  let statusIndex = 0;

  status.addEventListener("click", () => {
    statusIndex = (statusIndex + 1) % statuses.length;
    status.textContent = statuses[statusIndex];
  });
  newBookNameElement.value = "";
  newBookAuthorElement.value = "";
});
