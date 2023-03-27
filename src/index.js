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
    }  fetchCountries(countryName).then((countriesObj) => {
                        let backup = ``;
                        if (countriesObj.length > 10){
                            Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
                        } else if (countriesObj.length >= 2 && countriesObj.length <= 10){
                             
                            countriesObj.forEach((countryItem) => {
            backup += `<li><img  class="itemFlag" src="${countryItem.flags.svg}" alt="${countryItem.name.common}" /><p>${countryItem.name.official}"</p></li>`;
        }); 
        listEl.innerHTML = backup;}
        else{ countriesObj.map((country) => {
            listEl.innerHTML = "";
                card += `<ul>
                <li><img  class="flag" src="${country.flags.svg}" alt="${country.name.common}" /><p>${country.name.official}"</p></li>
                <li><p>Capital: ${country.capital}</p></li>
                <li><p>Population: ${country.population}</p></li>
                <li><p>Languages: ${country.languages}</p></li>
                </ul>`;
            }); 
            divEl.innerHTML = card;}
        }
                    )}
                    
    

