const myLibrary = [];
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);
const LOTRs = new Book("The Lord of the Rings", "J.R.R Tolkien", 1178);
myLibrary.push(theHobbit, LOTRs);
console.log(myLibrary[0]);
let title, author, pages, read;
const showDialog = document.querySelector(".showDialog");
const enterBookDialog = document.querySelector("#enter-book");
const deleteButton = document.querySelector(".close");
const submitButton = document.querySelector("button[type='submit'");
const library = document.querySelector(".library");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = null;
  // this.info = function () {
  //   console.log(`${this.title} by ${this.author}, ${pages} pages, ${read}`);
  // };
}
// Book.prototype.hasRead() {
//     read === true ? false : true;
// };
function addBookToLibrary() {
  title = document.querySelector('input[name="title"]').value;
  author = document.querySelector('input[name="author"]').value;
  pages = parseInt(document.querySelector('input[name="pages"]').value);
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  addBook(book);
  console.log(book);
  console.log(myLibrary);
}
function displayBooks() {
  let tableBody = document.querySelector("tbody");
  for (let entry of myLibrary) {
    let tableRow = document.createElement("tr");
    for (let prop in entry) {
      let currentElement = document.createElement("td");
      currentElement.innerText = entry[prop];
      // console.log(`curent prop is ${entry.prop}`);
      tableRow.appendChild(currentElement);
    }
    tableBody.appendChild(tableRow);
  }
}

displayBooks();
function addBook(book) {
  let tableBody = document.querySelector("tbody");
  let tableRow = document.createElement("tr");
  for (let prop in book) {
    let currentElement = document.createElement("td");
    currentElement.innerText = book[prop];
    // console.log(`curent prop is ${entry.prop}`);
    tableRow.appendChild(currentElement);
  }
  tableBody.appendChild(tableRow);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
});
