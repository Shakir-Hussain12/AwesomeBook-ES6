import NewBook from '../../modules/methods.js';
import handleDisplay from '../../modules/handleDisplay.js';
import showBooks from '../../modules/showBooks.js';

const btn = document.querySelector('#btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const book = document.querySelector('#content');
const myDate = document.querySelector('.date');
const li = document.querySelectorAll('.nav-links a');
const newForm = document.getElementById('newform');
const contact = document.getElementById('contact');

const data = JSON.parse(localStorage.getItem('bookData')) || [];
const myMethod = new NewBook(data);

// functionality to give the active class to the nav-link
li.forEach((item) => {
  item.addEventListener('click', (e) => {
    li.forEach((item) => {
      item.classList.remove('active');
      newForm.style.display = 'none';
      contact.style.display = 'none';
      book.style.display = 'none';
    });
    e.target.classList.toggle('active');
    handleDisplay(e.target);
  });
});

// to add date
const d = new Date().toUTCString();
myDate.innerText = d;

// to add new book item
btn.addEventListener('click', (e) => {
  e.preventDefault();
  myMethod.addItem(title.value, author.value);
  showBooks(myMethod, book, data);
});

// to display all books items
showBooks(myMethod, book, data);