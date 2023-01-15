import NewBook from '../../modules/methods.js';
import handleDisplay from '../../modules/handleDisplay.js';
import showBooks from '../../modules/showBooks.js';
import { DateTime } from '../../modules/Luxon.js';

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
const remActive = () => {
  li.forEach((item) => {
    item.classList.remove('active');
    newForm.style.display = 'none';
    contact.style.display = 'none';
    book.style.display = 'none';
  });
};

// functionality to give the active class to the nav-link
li.forEach((item) => {
  item.addEventListener('click', (e) => {
    remActive();
    e.target.classList.toggle('active');
    handleDisplay(e.target);
  });
});

// to add date
const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
myDate.innerText = now;

// to add new book item
btn.addEventListener('click', (e) => {
  e.preventDefault();
  myMethod.addItem(title.value, author.value);
  remActive();
  li[0].classList.toggle('active');
  handleDisplay(li[0]);
  showBooks(myMethod, book, data);
});

// to display all books items
showBooks(myMethod, book, data);