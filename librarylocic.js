//Choosing Variables from the DOM tree

let add = document.querySelector(".add");
let form = document.querySelector(".bookform");
let addbtn = document.querySelector("#submit");
let con = document.querySelector(".container");
form.style.visibility = "hidden";

console.log(add);
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
  form.style.visibility = "hidden";
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
  displayBooks();
  e.preventDefault();
}

//This display function would create a template in which the elements of the book would be stored and accessed

function displayBooks() {
  let card;
  let text;
  let remove;
  let myBooks = myLibrary;

  for (let i = 0; i < myBooks.length; i++) {
    myBooks = [];
    card = document.createElement("div");
    card.classList.add("card");
    con.appendChild(card);

    text = document.createElement("div");
    card.classList.add("text");
    card.appendChild(text);
    text.innerText = `Title :   ${title.value}
                      Author : ${author.value}
                      Pages :  ${numberOfPages.value}
                      Read :${read.value} `;

    remove = document.createElement("div");
    remove.classList.add("remove");
    card.append(remove);
    remove.innerText = "❌";
  }

  // this will remove the books when the remove is triggered

  remove = document.querySelectorAll(".remove");

  for (let i = 0; i < remove.length; i++) {
    remove[i].dataset.num = i;
  }

  remove.forEach((tile) => {
    tile.addEventListener("click", (e) => {
      con.removeChild(card);
      // let index = remove.dataset.num;
      // myBooks.splice(index, 1);
    });
  });
}

//Add event listener

addbtn.addEventListener("click", addBook);
add.addEventListener("click", () => {
  form.style.visibility = "visible";
});
