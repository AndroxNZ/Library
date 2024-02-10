const myLibrary = [];
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const LOTRs = new Book("The Lord of the Rings", "J.R.R Tolkien", 1178, true);
myLibrary.push(theHobbit, LOTRs);
console.log(myLibrary[0]);
let title, author, pages, read;

const deleteButton = document.querySelector(".close");
const submitButton = document.querySelector("button[type='submit'");
const library = document.querySelector(".library");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  // this.info = function () {
  //   console.log(`${this.title} by ${this.author}, ${pages} pages, ${read}`);
  // };
}
Object.defineProperty(Book.prototype, "hasRead", {
  enumerable: false,
  value: function () {
    this.read === true ? false : true;
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
  let tableBody = document.querySelector("tbody");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  for (let entry of myLibrary) {
    let tableRow = document.createElement("tr");
    for (let prop in entry) {
      let currentElement = document.createElement("td");
      currentElement.innerText = entry[prop];
      // console.log(`curent prop is ${entry.prop}`);
      tableRow.appendChild(currentElement);
    }
    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    tableRow.appendChild(delButton);
    let readStatus = document.createElement("button");
    readStatus.innerText = "Toggle Read";
    tableRow.appendChild(readStatus);
    tableBody.appendChild(tableRow);
  }
  let delButtons = library.querySelectorAll("button");
  delButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.target.closest("tr").remove();
    });
  });
}
displayBooks();

// function addBook(book) {
//   let tableBody = document.querySelector("tbody");
//   let tableRow = document.createElement("tr");
//   for (let prop in book) {
//     let currentElement = document.createElement("td");
//     currentElement.innerText = book[prop];
//     // console.log(`curent prop is ${entry.prop}`);
//     tableRow.appendChild(currentElement);
//   }
//   tableBody.appendChild(tableRow);
// }

submitButton.addEventListener("click", (event) => {
  addBookToLibrary();
  event.preventDefault();
});
