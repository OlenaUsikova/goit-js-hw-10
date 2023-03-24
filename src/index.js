import './css/styles.css';
import './fetchCountries.js'
import fetchCountries from './fetchCountries.js'
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const listEl = document.querySelector("country-list");
const divEl = document.querySelector("country-info");
const inputEl = document.querySelector("#search-box");

inputEl.addEventListener("input", debounce(onInputChange, DEBOUNCE_DELAY));


function onInputChange(e) {
    if (e.target.value === ''){
        divEl.innerHTML = "";
        listEl.innerHTML = "";
    }
     const countryName = (e.target.value).trim;
     fetchCountries(countryName)
    .then((contriesObj) => {console.log(contriesObj)})}