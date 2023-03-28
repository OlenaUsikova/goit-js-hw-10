import './css/styles.css';
import Notiflix from 'notiflix';
import './fetchCountries.js';
import fetchCountries from './fetchCountries.js';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const listEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');
const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(ev) {
  ev.preventDefault();
  const countryName = ev.target.value.trim();
  if (countryName === '') {
    divEl.innerHTML = '';
    listEl.innerHTML = '';
    return;
  }
  fetchCountries(countryName).then(countriesObj => {
    let backup = '';
    let card = '';
    if (countriesObj.length > 10) {
      Notiflix.Notify.warning(
        'Too many matches found. Please enter a more specific name.'
      );
    } else if (countriesObj.length >= 2 && countriesObj.length <= 10) {
        divEl.innerHTML = '';
      countriesObj.forEach(countryItem => {
        backup += `<li class="country__list"><img  class="flag" src="${countryItem.flags.svg}" alt="${countryItem.name.common}" /><p>${countryItem.name.official}</p></li>`;
      });
      listEl.innerHTML = backup;
      
    } else {
      countriesObj.map(country => {
        listEl.innerHTML = '';
        card += `<ul>
                <li><h1><img  class="flag" src="${country.flags.svg}" alt="${
          country.name.common
        }" /> ${country.name.official}</h1</li>
                <li><p>Capital: ${country.capital}</p></li>
                <li><p>Population: ${country.population}</p></li>
                <li><p>Languages: ${Object.values(country.languages).join(
                  ', '
                )}</p></li>
                </ul>`;
      });
      divEl.innerHTML = card;
    }
  });
}
