// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// récupérer les données
const countriesContainer = document.querySelector(".countries-container");
let countriesData = [];

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));
  console.log(countriesData);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData.map(
    (country) =>
      `
<dib class="card">
<img src=${country.flag.png}>
<h2>${country.translations.fra.common}</h2>
<h3>${country.capital}</h3>
<p> Population : ${country.population}</p>

</div>

`
  );
}

window.addEventListener("load", fetchCountries);

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
