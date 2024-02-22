import {api} from './api';

const refs = {
  quoteTextEl: document.querySelector('.quote-text'),
  quoteAuthorEl: document.querySelector('.quote-author'),
};
const currentDate = new Date().toDateString();
const savedDate = localStorage.getItem('quoteDate');

checkDate();

function checkDate() {
  if (currentDate !== savedDate) {
    fetchData();
  } else {
    getDataFromLS();
  }
}
function fetchData() {
  api.quotes().then(data => {
    renderQuote(data.quote, data.author);
    saveDataToLocalStorage(data.quote, data.author, currentDate);
  });
}
function renderQuote(text, author) {
  refs.quoteTextEl.innerHTML = `${text}`;
  refs.quoteAuthorEl.innerHTML = `${author}`;
}
function saveDataToLocalStorage(quote, author, currentDate) {
  localStorage.setItem('quoteText', quote);
  localStorage.setItem('quoteAuthor', author);
  localStorage.setItem('quoteDate', currentDate);
}
function getDataFromLS() {
  const savedQuote = localStorage.getItem('quoteText');
  const savedAuthor = localStorage.getItem('quoteAuthor');
  renderQuote(savedQuote, savedAuthor);
}
