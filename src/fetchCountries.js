import Notiflix from 'notiflix';

export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}/?fields=name,capital,population,flags,languages`
  ).then((response) => {
    if (!response.ok){
      throw new Error(error)
    }
    return response.json()}
  )}
  //  Notiflix.Notify.failure('Oops, there is no country with that name')