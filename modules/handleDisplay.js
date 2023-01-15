const newForm = document.getElementById('newform');
const contact = document.getElementById('contact');
const book = document.querySelector('#content');
// functionality to display element on the page
export default (element) => {
  if (element.innerText === 'Add new') {
    newForm.style.display = 'contents';
  } else if (element.innerText === 'List') {
    book.style.display = 'contents';
  } else if (element.innerText === 'Contact') {
    contact.style.display = 'contents';
  }
};