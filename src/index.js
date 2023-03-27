import './css/styles.css';
import Notiflix from 'notiflix';
import './fetchCountries.js'
import fetchCountries from './fetchCountries.js'
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const listEl = document.querySelector(".country-list");
const divEl = document.querySelector(".country-info");
const inputEl = document.querySelector("#search-box");

inputEl.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(ev) {
    ev.preventDefault();
    const countryName = ev.target.value.trim();
    if (countryName === '') {
        divEl.innerHTML = "";
        listEl.innerHTML = ""
    } else if (countryName.length > 10){
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
    } else if (countryName.length >= 2 && countryName.length <= 10){
        
    }
    
     fetchCountries(countryName)
    .then(countriesObj => {console.log(countriesObj)})}
   