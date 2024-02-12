const myLibrary = [];
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const LOTRs = new Book("The Lord of the Rings", "J.R.R Tolkien", 1178, true);
myLibrary.push(theHobbit, LOTRs);
console.log(myLibrary[0]);
let title, author, pages, read;

const deleteButton = document.querySelector(".close");
const submitButton = document.querySelector("button[type='submit'");
const library = document.querySelector(".library");
const tableBody = document.querySelector("tbody");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  // this.info = function () {
  //   console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
  // };
}
Object.defineProperties(Book.prototype, {
  hasRead: {
    value: function () {
      this.read === true ? (this.read = false) : (this.read = true);
    },
  },
  info: {
    value: function () {
      console.log(
        `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
      );
    },
  },
});
function addBookToLibrary() {
  title = document.querySelector('input[name="title"]').value;
  author = document.querySelector('input[name="author"]').value;
  pages = parseInt(document.querySelector('input[name="pages"]').value);
  let book = new Book(title, author, pages);
  myLibrary.push(book);
  displayBooks(book);
  console.log(book);
  console.log(myLibrary);
}
function displayBooks() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  for (let entry of myLibrary) {
    let tableRow = document.createElement("tr");
    let index = document.createElement("td");
    tableRow.appendChild(index);
    index.innerText = myLibrary.indexOf(entry) + 1;
    for (let prop in entry) {
      let currentElement = document.createElement("td");
      currentElement.innerText = entry[prop];
      // console.log(`curent prop is ${entry.prop}`);
      tableRow.appendChild(currentElement);
    }
    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    delButton.setAttribute("class", "delete");
    tableRow.appendChild(delButton);
    let readStatus = document.createElement("button");
    readStatus.innerText = "Toggle Read";
    readStatus.setAttribute("class", "toggle");
    tableRow.appendChild(readStatus);
    tableBody.appendChild(tableRow);
  }
  let delButtons = document.querySelectorAll("button.delete");
  delButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let index = parseInt(event.target.parentElement.firstChild.innerText) - 1;
      myLibrary.splice(index, 1);
      event.target.closest("tr").remove();
    });
  });
  let toggleButtons = document.querySelectorAll("button.toggle");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let index = parseInt(event.target.parentElement.firstChild.innerText) - 1;
      myLibrary[index].hasRead();
      event.target.previousSibling.previousSibling.innerText =
        myLibrary[index].read;
    });
  });
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
});

displayBooks();
