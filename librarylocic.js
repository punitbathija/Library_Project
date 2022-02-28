//Choosing Variables from the DOM tree

let add = document.querySelector(".add");
let form = document.querySelector(".bookform");
let addbtn = document.querySelector("#submit");
let con = document.querySelector(".container");
//Array in which the books are to be stored

let myLibrary = [];

//Constructor to add new books

function book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

//This is a add Book function this will take the arguements and add to the books array.

function addBook(e) {
  let Title = document.querySelector("#title").value;
  let Author = document.querySelector("#author").value;
  let NumberOfPages = document.querySelector("#numberOfPages").value;
  let Read = document.querySelector("#read");
  if (Read.checked) {
    Read.value = "👍";
  } else {
    Read.value = "👎";
  }
  myLibrary.push(new book(Title, Author, NumberOfPages, Read));
  console.log(myLibrary);
  displayBooks();
  e.preventDefault();
}

//Add event listener

addbtn.addEventListener("click", addBook);

function displayBooks() {
  let card;
  let text;
  let remove;
  let myBooks = myLibrary;
  for (let i = 0; i < myBooks.length; i++) {
    card = document.createElement("div");
    card.classList.add("card");
    con.appendChild(card);

    text = document.createElement("div");
    card.classList.add("text");
    card.appendChild(text);
    text.innerHTML = `${title.value}, ${author.value}, ${numberOfPages.value}, ${read.value}`;
    text.innerText = `Title : ${title.value}
                      Author : ${author.value}
                      Pages : ${numberOfPages.value}
                      Read : ${read.value}`;

    remove = document.createElement("div");
    remove.classList.add("remove");
    card.append(remove);
    remove.innerText = "❌";
  }
}
